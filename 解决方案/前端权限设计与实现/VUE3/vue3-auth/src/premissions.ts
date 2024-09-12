/*
 * @Author: cirs
 * @Date: 2024-09-11 14:53:51
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 19:41:27
 * @FilePath: /vue3-auth/src/premissions.ts
 * @Description:
 *
 */
import router from '@/router';
import { getToken } from './utils/auth';
import { useUserStore } from './stores/user';
import { usePremissionsStore } from './stores/premissions';
const WHITE_LIST = ['/login'];
router.beforeEach(async (to) => {
  const token = getToken();
  console.log(token, '====token');
  const userStore = useUserStore();
  const premissionsStore = usePremissionsStore();

  // 已经登陆
  if (token) {
    // 如果登陆了，还去访问登陆页面 则自动跳转到/home页面
    if (to.path === '/login') {
      return { path: '/home', replace: true };
    }
    // 此先线获取用户的角色
    const roles = userStore.state.roles;
    if (roles) {
      //如果有角色,说明已经获取过用户信息了
      return true;
    }
    await userStore.getUserInfo();
    const accessRoutes = await premissionsStore.generateRoutes();
    // 把有权限的路由添加到路由配置中
    accessRoutes.forEach((route) => {
      router.addRoute(route);
    });
    return router.push(to.path);
  }
  // 白名单
  if (WHITE_LIST.includes(to.path)) {
    return true;
  }
  // 没登录
  return {
    path: '/login',
    query: {
      //跳到登录页的时候，携带原来想访问的路径
      redirect: to.path,
      ...to.query,
    },
  };
});

/**
 * 在用户登陆成功之后民谣更具用户的权限来决定显示的菜单和路由配置
 * 先获取用户信息，在获取用户角色，在更具用户的角色获取对应的菜单，再用菜单过滤路由
 */
