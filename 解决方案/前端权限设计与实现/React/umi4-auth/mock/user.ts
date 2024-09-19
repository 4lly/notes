import Mock from 'mockjs';
import { defineMock } from '@umijs/max';

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
  'tokens': {
    'access_token': '@id',
    'refresh_token': '@id',
  },
  'currentUser': {
    'api': ['/api1', '/api2'],
    'awatar':
      'https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png',
    'id': '@id',
    'roles': ['member'],
    'username': 'tom',
  },
});
const token2Data = Mock.mock({
  'tokens': {
    'access_token': '@id',
    'refresh_token': '@id',
  },
  'currentUser': {
    'api': ['/api1', '/api2'],
    'awatar':
      'https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png',
    'id': '@id',
    'roles': ['root', 'admin'],
    'username': 'tom',
  },
});

export default defineMock({
  // 登陆
  'POST /api/auth/login': (req: any, res: any) => {
    res.status(200).json({
      code: '200',
      data: req.body.username === 'tom' ? token2Data : tokenData,
    });
  },
  // 刷新token
  'POST /api/auth/refresh_token': (req: any, res: any) => {
    res.status(200).json({
      code: '200',
      data: tokenData,
    });
  },
  // 获取用户列表
  '/api/userList': (req: any, res: any) => {
    res.status(200).json({ code: '200', data: userData });
  },
});
