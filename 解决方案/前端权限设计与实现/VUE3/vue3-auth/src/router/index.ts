/*
 * @Author: cirs
 * @Date: 2024-09-11 13:41:01
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 19:43:03
 * @FilePath: /vue3-auth/src/router/index.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },

  { path: '/login', component: () => import('@/views/Login/index.vue') },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound/index.vue'),
  },
];
// 下面这些路由配置不是全量配置的
// 而是要更具用户的权限进行过滤的，用户能访问此陆游才能配置
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: () => import('@/views/Home/index.vue') },
      {
        path: 'system',
        children: [
          { path: 'menu', component: () => import('@/views/Menu/index.vue') },
          {
            path: 'role',
            component: () => import('@/views/Role/index.vue'),
          },
          { path: 'user', component: () => import('@/views/User/index.vue') },
        ],
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
