/*
 * @Author: cirs
 * @Date: 2024-09-19 13:45:57
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-19 13:59:10
 * @FilePath: /umi4-auth/src/access.ts
 * @Description:
 *
 */
const ROLE_ROOT = 'root';
const ROLE_ADMIN = 'admin';
const ROLE_MEMBER = 'member';

export default function (initialState) {
  // 获取当前用户可以读取的角色数组
  const roles: string[] = initialState?.currentUser?.roles || [];
  return {
    // 如果当前用户的角色包括root角色的话就返回true，就表示有权限
    canReadRole: roles.includes(ROLE_ROOT), //可以访问角色的路由
    canReadUser: roles.includes(ROLE_ROOT) || roles.includes(ROLE_ADMIN),
    canReadMenu: roles.includes(ROLE_ROOT) || roles.includes(ROLE_ADMIN),
  };
}
