/*
 * @Author: cirs
 * @Date: 2024-09-19 11:59:38
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-19 12:19:44
 * @FilePath: /umi4-auth/src/services/user.ts
 * @Description:
 *
 */
import { request } from '@umijs/max';
export async function sigin(params) {
  return request('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  });
}
