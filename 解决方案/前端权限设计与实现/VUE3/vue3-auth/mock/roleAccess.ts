/*
 * @Author: cirs
 * @Date: 2024-09-11 15:54:29
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 18:11:52
 * @FilePath: /vue3-auth/mock/roleAccess.ts
 * @Description:
 *
 */
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

const userInfoData = Mock.mock({
  'roles': [
    {
      'id': 1,
      'name': '管理员',
    },
  ],
  'userInfo': {
    'id': 2,
    'username': '管理员',
    'email': '@email',
    'mobie': '17700000001',
    'isSuper': false,
  },
});
const accessData = Mock.mock({
  'list': [
    {
      'id': 1,
      'type': 1,
      'title': '首页',
      'path': '/home',
      'icon': 'Aim',
      'name': 'guide',
      'sort_id': 1,
      parent_id: null,
      status: 1,
      description: '',
      createAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
      updateAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
    },
    {
      'id': 2,
      'type': 1,
      'title': '系统管理',
      'path': '/system',
      'icon': 'Setting',
      'name': 'System',
      'sort_id': 2,
      parent_id: null,
      status: 1,
      description: '',
      createAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
      updateAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
    },
    {
      'id': 3,
      'type': 1,
      'title': '菜单管理',
      'path': '/system/menu',
      'icon': 'Menu',
      'name': 'menu',
      'sort_id': 3,
      parent_id: 2,
      status: 1,
      description: '',
      createAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
      updateAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
    },
    {
      'id': 4,
      'type': 1,
      'title': '角色管理',
      'path': '/system/role',
      'icon': 'Key',
      'name': 'role',
      'sort_id': 4,
      parent_id: 2,
      status: 1,
      description: '',
      createAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
      updateAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
    },
    {
      'id': 5,
      'type': 1,
      'title': '用户管理',
      'path': '/system/user',
      'icon': 'User',
      'name': 'user',
      'sort_id': 5,
      parent_id: 2,
      status: 1,
      description: '',
      createAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
      updateAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
    },
  ],
});
export default [
  {
    // 获取用户权限
    url: '/api/auth/info',
    method: 'post',
    response: (e) => {
      return {
        code: '200',
        data: userInfoData,
      };
    },
  },
  {
    // 获取用户菜单
    url: '/api/role_access/role/access',
    method: 'post',
    response: (e) => {
      return {
        code: '200',
        data: accessData,
      };
    },
  },
] as MockMethod[];
