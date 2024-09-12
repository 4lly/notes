/*
 * @Author: cirs
 * @Date: 2024-09-11 14:41:01
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 17:39:58
 * @FilePath: /vue3-auth/src/api/user.ts
 * @Description:
 *
 */
import request from './request';
export const login = (data) => {
  return request.post('/auth/login', data);
};

export const userListService = () => {
  return request.get('/userList');
};
export const authInfoService = () => {
  return request.post('/auth/info');
};
