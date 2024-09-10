/*
 * @Author: cirs
 * @Date: 2024-09-09 12:54:13
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-09 18:20:16
 * @FilePath: /notes/解决方案/大文件上传/uploadfile-client/src/FileUploader/index.js
 * @Description: 
 * 
 */
import { InboxOutlined } from '@ant-design/icons';
import './index.css';
import { useEffect, useRef, useState } from 'react';
import useDrag from './useDrag';
import { Button, Progress, Spin, message } from 'antd';
import { CHUNK_SIZE, MAX_RETRIES, MAX_UPLOAD_SIZE } from './constant';
import axiosInstance from './axiosInstance';
import axios from 'axios';
const UploadStatus = {
  NOT_STARTED: 'NOT_STARTED',// 初始化状态，尚未开始上传
  UPLOADING: 'UPLOADING',//上传中
  PAUSED: 'PAUSED'//已暂停
};
const FileUploader = () => {
  const uploadContainerRef = useRef(null);
  const {
    selectedFile, filePreview, resetFileStatus
  } = useDrag(uploadContainerRef);
  const [uploadProgress, setUploadProgress] = useState({});
  // 控制上传状态 初始状态 上传中，已暂停
  const [uploadStatus, setUploadStatus] = useState(UploadStatus.NOT_STARTED);
  // 存放所有上传请求的取消Token
  const [cancelTokens, setCancelTokens] = useState([]);
  const [fileNameWorker, setFileNameWorker] = useState(null);
  const [isCalculatingFileName, setIsCalculatingFileName] = useState(false);
  useEffect(() => {
    // 优化新能
    const fileNameWorker = new Worker('/fileNameWorker.js');
    setFileNameWorker(fileNameWorker);
  }, []);
  const resetAllStatus = () => {
    resetFileStatus();
    setUploadProgress({});
    setUploadStatus(UploadStatus.NOT_STARTED);
  };
  const handleUpload = async () => {
    if (!selectedFile) {
      message.error('您尚未选中任何文件');
      return;
    }
    setUploadStatus(UploadStatus.UPLOADING);
    // 向webworker发送一个消息，让他帮忙计算文件对应的文件名
    fileNameWorker.postMessage(selectedFile);
    setIsCalculatingFileName(true);
    // 监听webworker发过来的信息，接收计算好的文件名
    fileNameWorker.onmessage = async (event) => {
      setIsCalculatingFileName(false);
      await uploadFile(selectedFile, event.data, setUploadProgress, resetAllStatus, setCancelTokens);
    };

  };
  const pausedUpload = () => {
    setUploadStatus(UploadStatus.PAUSED);
    cancelTokens.forEach(cancelToken => cancelToken.cancel('用户主动暂停上传'));
  };

  const renderButton = () => {
    switch (uploadStatus) {
      case UploadStatus.NOT_STARTED:
        return <Button onClick={handleUpload}>上传</Button>;
      case UploadStatus.UPLOADING:
        return <Button onClick={pausedUpload}>暂停</Button>;
      case UploadStatus.PAUSED:
        return <Button onClick={handleUpload}>恢复上传</Button>;

    }

  };
  const renderProgress = () => {
    if (uploadStatus !== UploadStatus.NOT_STARTED) {
      let totalProgress = renderTotalProgress();
      let chunkProgresses = Object.keys(uploadProgress).map((chunkName, index) => {
        return (
          <div>
            <span>切片{index}:</span>
            <Progress percent={uploadProgress[chunkName]} />
          </div>);
      });
      return <>
        {totalProgress}
        {chunkProgresses}
      </>;

    }

  };
  const renderTotalProgress = () => {
    const percents = Object.values(uploadProgress);
    const totalPercent = Math.round(percents.reduce((acc, curr) => acc + curr, 0) / percents.length);

    return (<div>
      <span>总进度 :</span>
      <Progress percent={totalPercent} />
    </div>);

  };

  return (
    <>
      <div className="upload-container" ref={uploadContainerRef}>
        {renderFilePreview(filePreview)}
      </div>
      {renderButton()}
      {isCalculatingFileName && <Spin  ><span>正在计算文件名...</span></Spin>}
      {renderProgress()}

    </>
  );
};

function createRequest (fileName, chunkFileName, chunk, setUploadProgress, cancelToken, start, totalSize) {
  return axiosInstance.post(`/upload/${fileName}`, chunk, {
    headers: {//这个请求是告诉服务器亲求提示二进制格式，一个字节流
      'Content-Type': 'application/octet-stream'
    },
    params: {// 此查询参数会拼接到url地址里
      chunkFileName,
      start,// 写入文件的起始位置参数
    },
    // axios内部调用原生XMLHttpRequest的onprogress事件
    onUploadProgress: (progressEvent) => { // 上传进度发生变化的事件回调函数 
      // progressEvent.loaded 本次上传成功的字节+ start 上次上传成功的字节 / 总字节数
      const percentCompleted = Math.round((progressEvent.loaded + start) * 100 / totalSize);
      setUploadProgress((prevProgress) => ({
        ...prevProgress,
        [chunkFileName]: percentCompleted
      }));
    },
    cancelToken: cancelToken.token
  });

}
/**
 * 实现切片上传大文件
 * @param {*} file  文件
 * @param {*} fileName 文件名
 */
async function uploadFile (file, fileName, setUploadProgress, resetAllStatus, setCancelTokens, retryCount = 0) {
  const { needUpload, uploadedChunkList } = await axiosInstance.get(`/verify/${fileName}`);
  if (!needUpload) {
    message.success('文件已存在，秒传成功');
    return resetAllStatus();
  };
  // 把文件进行切片
  const chunks = createFileChunks(file, fileName);
  const newCancelTokens = [];
  // 实现并行上传
  const requests = chunks.map(({ chunk, chunkFileName }) => {
    const cancelToken = axios.CancelToken.source();
    newCancelTokens.push(cancelToken);

    // 以后往服务器发送的数据可能就不再是完整的分片数据
    // 判断当前的分片是否已经上传过服务器了
    const existingChunk = uploadedChunkList.find(uploadedChunk => uploadedChunk.chunkFileName === chunkFileName);
    // 如果存在existingChunk 说明此分片已经上传过一部分了或者已经完全上传了
    if (existingChunk) {
      // 获取已经上传的分片大小
      const uploadedSize = existingChunk.size;
      // 从chunk中进行截取，过滤掉已经上传的大小，得到身下的需要继续上传的内容
      const remainingChunk = chunk.slice(uploadedSize);
      // 如果剩下的数据为0，说明完全上传完毕
      if (remainingChunk.size === 0) {

        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [chunkFileName]: 100
        }));
        return Promise.resolve();
      }
      // 如果剩下的数据还有 则需要继续上传剩余的部分
      setUploadProgress((prevProgress) => ({
        ...prevProgress,
        [chunkFileName]: Math.round(uploadedSize * 100 / chunk.size)
      }));
      return createRequest(fileName, chunkFileName, remainingChunk, setUploadProgress, cancelToken, uploadedSize, chunk.size);

    } else {
      return createRequest(fileName, chunkFileName, chunk, setUploadProgress, cancelToken, 0, chunk.size);

    }
  });
  setCancelTokens(newCancelTokens);
  try {
    // 并行上传每个分片
    await Promise.all(requests);
    // 等全部分片上传完了，会向服务器发送一个合并文件的请求
    await axiosInstance.get(`/merge/${fileName}`);
    message.success('文件上传完成');
    resetAllStatus();
  } catch (error) {
    // 用户主动点击暂停按钮
    if (axios.isCancel(error)) {
      console.log('上传暂停', error);
      message.error('文件上传暂停');
    } else {
      if (retryCount < MAX_RETRIES) {
        console.log('上传失败，重试中...');
        return uploadFile(file, fileName, setUploadProgress, resetAllStatus, setCancelTokens, retryCount + 1);
      }
      console.log('上传出错', error);
      message.error('文件上传出错啦');
    }

  }

}


function createFileChunks (file, fileName) {
  let chunks = [];
  // 计算一共要切成多少片
  let count = Math.ceil(file.size / CHUNK_SIZE);
  for (let i = 0; i < count; i++) {
    const chunk = file.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
    chunks.push({
      chunk,
      chunkFileName: `${fileName}_${i}`
    });
  }
  return chunks;
}

/**
 * 显示文件的预览
 * @param {*} filePreview 
 * @returns 
 */
function renderFilePreview (filePreview) {
  const { url, type } = filePreview;
  if (!url) {
    return <InboxOutlined />;
  }
  if (type.startsWith('video/')) {
    return <video src={url} alt="preview video" controls />;

  } else if (type.startsWith('image/')) {
    return <img src={url} alt="preview image" />;

  } else {
    return url;
  }

};
export default FileUploader;
