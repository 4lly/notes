/*
 * @Author: cirs
 * @Date: 2024-09-11 15:54:29
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 17:47:01
 * @FilePath: /vue3-auth/mock/user.ts
 * @Description:
 *
 */
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

const userData = Mock.mock({
  'list|10': [
    {
      'id|+1': 1,
      'name': '@cname',
      'age|18-60': 1,
      'email': '@email',
    },
  ],
});
const tokenData = Mock.mock({
  'token': '@id',
  'refresh_token': '@id',
});

export default [
  {
    // 登陆
    url: '/api/auth/login',
    method: 'post',
    response: (e) => {
      return {
        code: '200',
        data: tokenData,
      };
    },
  },
  {
    // 刷新token
    url: '/api/auth/refresh_token',
    method: 'post',
    response: (e) => {
      return {
        code: '200',
        data: tokenData,
      };
    },
  },

  {
    // 获取用户列表
    url: '/api/userList',
    method: 'get',
    statusCode: 401,
    response: (e) => {
      return { code: '200', data: userData };
    },
  },
] as MockMethod[];
