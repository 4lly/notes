/*
 * @Author: cirs
 * @Date: 2024-09-09 13:03:46
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-09 18:24:45
 * @FilePath: /notes/解决方案/大文件上传/uploadfile-client/src/FileUploader/useDrag.js
 * @Description: 
 * 
 */
import { useEffect, useCallback, useState } from 'react';
import { message } from 'antd';
import { MAX_FILE_SIZE } from './constant';
const useDrag = (uploadContainerRef) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState({ url: null, type: null });
  const handleDrag = useCallback((event) => {
    event.preventDefault();//阻止默认行为
    event.stopPropagation();// 阻止事件传播

  }, []);
  const checkFile = (files) => {
    const file = files[0];
    if (!file) {
      message.error('没有选择任何文件');
      return;
    }
    // 判断文件大小
    if (file.size > MAX_FILE_SIZE) {
      message.error('文件大小不能超过2G');
      return;
    }
    // 判断文件类型 只能上传图片和视频
    if (!(file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      message.error('文件类型必须是图片或视频');
      return;
    }
    setSelectedFile(file);
  };
  const handleDrop = useCallback((event) => {
    event.preventDefault();//阻止默认行为
    event.stopPropagation();// 阻止事件传播
    checkFile(event.dataTransfer.files);
  }, []);
  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const url = URL.createObjectURL(selectedFile);
    setFilePreview({
      url,
      type: selectedFile.type
    });
    // 销毁函数 撤销占用的资源
    return () => {
      URL.revokeObjectURL(url);
    };

  }, [selectedFile]);
  useEffect(() => {
    const uploadContainer = uploadContainerRef.current;
    uploadContainer.addEventListener('dragenter', handleDrag);
    uploadContainer.addEventListener('dragover', handleDrag);
    uploadContainer.addEventListener('drop', handleDrop);
    uploadContainer.addEventListener('dragleave', handleDrag);
    return () => {
      uploadContainer.removeEventListener('dragenter', handleDrag);
      uploadContainer.removeEventListener('dragover', handleDrag);
      uploadContainer.removeEventListener('drop', handleDrop);
      uploadContainer.removeEventListener('dragleave', handleDrag);
    };

  }, []);
  useEffect(() => {
    const uploadContainer = uploadContainerRef.current;
    uploadContainer.addEventListener('click', (event) => {
      event.preventDefault();//阻止默认行为
      event.stopPropagation();// 阻止事件传播
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.style.display = 'none';
      fileInput.addEventListener('change', (event) => {
        checkFile(event.target.files);
      });
      // 手工触发文件的选择
      document.body.appendChild(fileInput);
      fileInput.click();
    });
  }, []);
  const resetFileStatus = () => {
    setSelectedFile(null);
    setFilePreview({ url: null, type: null });
  };
  return {
    selectedFile,
    filePreview,
    resetFileStatus
  };
};
export default useDrag;
