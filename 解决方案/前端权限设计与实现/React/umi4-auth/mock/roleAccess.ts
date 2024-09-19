/*
 * @Author: cirs
 * @Date: 2024-09-19 11:37:29
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-19 13:57:46
 * @FilePath: /umi4-auth/mock/roleAccess.ts
 * @Description:
 *
 */
import Mock from 'mockjs';
import { defineMock } from '@umijs/max';
import routes from 'config/routes';

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
  'menus': [
    {
      name: '用户管理',
      icon: 'HomeOutlined',
      path: '/user',
      component: './user/index',
      access: 'canReadRole',
    },

    {
      name: '角色管理',
      icon: 'HomeOutlined',
      path: '/role',
      component: './role/index',
      access: 'canReadRole',
    },
    {
      name: '菜单管理',
      icon: 'HomeOutlined',
      path: '/mune',
      component: './menu/index',
      access: 'canReadRole',
    },
  ],
});
export default defineMock({
  // 获取用户权限
  'POST /api/auth/info': (req: any, res: any) => {
    res.status(200).json({
      code: '200',
      data: userInfoData,
    });
  },
  // 获取用户菜单
  '/api/menus': (req: any, res: any) => {
    res.status(200).json({
      code: '200',
      data: accessData,
    });
  },
});
