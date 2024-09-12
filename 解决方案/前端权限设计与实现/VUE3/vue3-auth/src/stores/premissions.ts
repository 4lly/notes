/*
 * @Author: cirs
 * @Date: 2024-09-11 14:20:29
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 19:38:08
 * @FilePath: /vue3-auth/src/stores/premissions.ts
 * @Description:
 *
 *
 */
import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { useMenuStore } from './menu';
import { useUserStore } from './user';
import { dynamicRoutes } from '@/router';
import path from 'path-browserify';
export const usePremissionsStore = defineStore('premissions', () => {
  const state = reactive({
    accessRoutes: [], //用户有权限访问的路由
  });
  // 编写一个方法用来生成当前登陆的用户有权限的路由配置
  const menuStore = useMenuStore();
  const userStore = useUserStore();
  // 计算 或者生成用户有权限的路由配置
  const generateRoutes = async () => {
    // 获取用户有权限的菜单
    // 获取用户的角色Id数组
    const roleIds = computed(() =>
      userStore.state.roles.map((role) => role.id),
    );
    // 获取角色Id数组对应的菜单数组，这是一维的
    const menus = await menuStore.getAccessByRoles(roleIds.value);
    // 使用用户有权限的菜单过滤所有的动态路由，返回有权限的动态路由
    return filterdynamicRoutes(menus, dynamicRoutes);
  };
  return {
    state,
    generateRoutes,
  };
});

function filterdynamicRoutes(menus, routes) {
  // 映射出菜单路径组成的数组['/home','/system']
  const menuPaths = menus.map((menu) => menu.path);

  return generateRoutes(menuPaths, routes);
}

function generateRoutes(menuPaths, routes, basePath = '/') {
  const routerData = [];
  routes.forEach((route) => {
    // 先更具父路径加上自己的路径拼出一个完整路径出来
    const routeFullPath = path.resolve(basePath, route.path);
    if (route?.children) {
      route.children = generateRoutes(
        menuPaths,
        route?.children || [],
        routeFullPath,
      );
    }
    // 如果当前路由的路径在有权限的菜单中的话，就认为是有权限
    // 或者虽然自己没有权限，但是子路由有权限的话，也会显示出来
    if (
      menuPaths.includes(routeFullPath) ||
      (route.children && route.children.length >= 1)
    ) {
      routerData.push(route);
    }
  });

  return routerData;
}
