/*
 * @Author: cirs
 * @Date: 2024-09-11 14:38:22
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 16:54:45
 * @FilePath: /vue3-auth/src/api/request.ts
 * @Description:
 *
 */
import router from '@/router';
import {
  getRefreshToken,
  getToken,
  removeToken,
  setRefreshToken,
  setToken,
} from '@/utils/auth';
import axios from 'axios';
const request = axios.create({
  timeout: 1000000,
  baseURL: '/api',
});

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error.response && error.response.status === 401) {
      removeToken(); //清除老的token
      if (!error.config.retry) {
        //如果是重试，就不再重试了
        error.config.retry = true;
        return refreshTokenHandle(error.config);
      } else {
        router.push('/login');
        return Promise.reject(new Error('重试失败，请重新登陆'));
      }
    }
    return Promise.reject(error);
  },
);
async function refreshTokenHandle(config) {
  // 获取刷新token
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    router.push('/login');
    return Promise.reject(new Error('刷新token不存在，无法刷新'));
  }
  try {
    // 如果刷新token存在，则调用刷新token 获取新的token
    const res = await axios.post(
      '/api/auth/refresh_token',
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
    const { token, refresh_token } = res.data.data;
    if (token) {
      setToken(token);
      setRefreshToken(refresh_token);
      // 刷新得到最新的token后可以重新发送原来失败的请求
      // 把原来的请求认证token刷新成最新的token
      config.headers.Authorization = `Bearer ${token}`;
      return request(config);
    } else {
      return Promise.reject(new Error('刷新token失败'));
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
export default request;
