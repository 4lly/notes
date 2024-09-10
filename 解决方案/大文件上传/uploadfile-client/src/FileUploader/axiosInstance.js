/*
 * @Author: cirs
 * @Date: 2024-09-09 14:17:01
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-09 14:30:05
 * @FilePath: /notes/代码/大文件上传/uploadfile-client/src/FileUploader/axiosinstance.js
 * @Description: 
 * 
 */
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
});

axiosInstance.interceptors.response.use(
  (response) => {
    // response 响应对象 data，headers 
    if (response.data && response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message || '服务端错误');
    }

  }, (error) => {
    console.log(error);
    throw error;

  });
export default axiosInstance;