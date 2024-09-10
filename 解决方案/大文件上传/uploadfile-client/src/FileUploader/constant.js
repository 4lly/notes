/*
 * @Author: cirs
 * @Date: 2024-09-09 13:21:36
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-10 14:23:05
 * @FilePath: /notes/解决方案/大文件上传/uploadfile-client/src/FileUploader/constant.js
 * @Description: 
 * 
 */
export const MAX_FILE_SIZE = 1024 * 1024 * 1024 * 2;//2G
// 每个切片的大小
export const CHUNK_SIZE = 1024 * 1024 * 10;//10M
export const MAX_RETRIES = 3;//重试机制
export const MAX_UPLOAD_SIZE = 5;//最大上传限制