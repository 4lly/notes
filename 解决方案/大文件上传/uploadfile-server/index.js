/*
 * @Author: cirs
 * @Date: 2024-09-09 14:42:51
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-09 17:36:24
 * @FilePath: /notes/解决方案/大文件上传/uploadfile-server/index.js
 * @Description: 
 * 
 */
const express = require('express');
const logger = require('morgan');
// const { StatusCodes } = require('http-status-codes');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');
// 存放上传并且合并好的目录
const PUBLIC_DIR = path.resolve(__dirname, 'public');
fs.ensureDirSync(PUBLIC_DIR);
// 存放分片的文件
const TEMP_DIR = path.resolve(__dirname, 'temp');

fs.ensureDirSync(TEMP_DIR);
const CHUNK_SIZE = 1024 * 1024 * 10;//10M
const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());//接受json请求体
app.use(express.urlencoded({ extended: true }));//接收表单请求体
app.use(express.static(path.resolve(__dirname, 'public')));

// 上传分片数据
app.post('/upload/:fileName', async (req, res, next) => {
  // 通过路径参数获取文件名
  const { fileName } = req.params;
  // 通过查询参数获取分片名
  const { chunkFileName } = req.query;
  const start = isNaN(req.query.start) ? 0 : parseInt(req.query.start, 10);
  const chunkDir = path.resolve(TEMP_DIR, fileName);
  // 分片的文件路径
  const chunkFilePath = path.resolve(chunkDir, chunkFileName);
  // 确保分片目录存在
  await fs.ensureDir(chunkDir);
  // 创建次文件的可写流,可以指定写入的起始位置  flag: 'a' 追加文件
  const ws = fs.createWriteStream(chunkFilePath, { start, flag: 'a' });
  // 后面会实现暂停操作，如果客户端点击流暂停操作按钮，会取消上传的操作，取消之后，会在服务器触发流对象的
  // oborted事件，关闭可写流
  req.on('oborted', () => {
    ws.close();
  });
  // 使用管道的方式把请求中的请求体流数据写入到文件中
  try {
    await pipeStream(req, ws);
    // 创建用户保存次文件的分片的目录
    res.json({ success: true });
  } catch (error) {
    next(error);
  }

});

// 合并分片文件
app.get('/merge/:fileName', async (req, res, next) => {
  // 通过路径参数获取文件名
  const { fileName } = req.params;
  try {
    await mergeChunks(fileName);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// 查询文件
app.get('/verify/:fileName', async (req, res, next) => {
  // 通过路径参数获取文件名
  const { fileName } = req.params;
  // 先获取文件在服务器是否存在
  const filePath = path.resolve(PUBLIC_DIR, fileName);
  const isExist = await fs.pathExists(filePath);
  if (isExist) {
    // 如果存在，直接返回不需要上传了
    return res.json({ success: true, needUpload: false });
  }
  const chunkDir = path.resolve(TEMP_DIR, fileName);
  const existDir = await fs.pathExists(chunkDir);
  // 存放已经上传的分片的对象数组
  let uploadedChunkList = [];
  if (existDir) {
    // 读取临时目录里面的所有分片对应的文件
    const chunkFileNames = await fs.readdir(chunkDir);
    // 读取每个分片文件的文件信息，主要是它的文件大小，表示已经上传的文件大小
    uploadedChunkList = await Promise.all(chunkFileNames.map(async function (chunkFileName) {
      const { size } = await fs.stat(path.resolve(chunkDir, chunkFileName));
      return { chunkFileName, size };
    }));
  }
  // 如果不存在，意味着服务器还需要你上传此文件
  // 返回，上传尚未完成，但是已经开始上传了一部分了，我把已经上传的分片名和分片的大小给客户端
  // 客户端可以只上传分片剩下的数据就可以了
  res.json({ success: true, needUpload: true, uploadedChunkList });

});

async function mergeChunks (fileName) {
  const mergeFilePath = path.resolve(PUBLIC_DIR, fileName);
  const chunkDir = path.resolve(TEMP_DIR, fileName);
  const chunkFiles = await fs.readdir(chunkDir);
  // 对分片按索引进行升序排序
  chunkFiles.sort((a, b) => Number(a.split('-')[1]) - Number(b.split('-')[1]));
  try {
    // 为了提高性能，我们可以在这里进行分片并行写入
    const pipes = chunkFiles.map((chunkFile, index) => {
      return pipeStream(
        fs.createReadStream(path.resolve(chunkDir, chunkFile), { autoClose: true }),
        fs.createWriteStream(mergeFilePath, { start: index * CHUNK_SIZE }),
      );
    });
    // 并发把每个分片的数据写入到目标文件中
    await Promise.all(pipes);
    // 删除分片的文件和文件夹
    await fs.rmdir(chunkDir, { recursive: true });
  } catch (error) {
    next(error);

  }

}
function pipeStream (rs, ws) {
  return new Promise((resolve, reject) => {
    // 把可读流中的数据写入到可写流
    rs.pipe(ws).on('finish', resolve).on('error', reject);
  });

}
app.listen(8080, () => {
  console.log('server started on port 8080');
});