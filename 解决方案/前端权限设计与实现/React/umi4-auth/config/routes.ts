// 没有此文件 路由是约定路由模式，也就是说 pages下面的每个文件都是一个路由组件
// 如果有此文件的话就使用配置式路径，会使用此配置文件生成路由
export default [
  { path: '/', redirect: '/home' },
  {
    name: '首页',
    icon: 'HomeOutlined',
    path: '/home',
    component: './home/index',
  },
  {
    name: '登陆',
    icon: 'HomeOutlined',
    path: '/sign',
    component: './sign/index',
    hideInMenu: true, //在菜单中隐藏
  },
];
