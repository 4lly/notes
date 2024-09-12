/*
 * @Author: cirs
 * @Date: 2024-09-11 14:41:01
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 17:51:51
 * @FilePath: /vue3-auth/src/api/roleAccess.ts
 * @Description:
 *
 */
import request from './request';
export const roleAccessesService = (roles) => {
  // 获取此角色对应的菜单的数组
  return request.post('/role_access/role/access', roles);
};
