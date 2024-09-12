/*
 * @Author: cirs
 * @Date: 2024-09-11 14:20:29
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 19:37:45
 * @FilePath: /vue3-auth/src/stores/menu.ts
 * @Description:
 *
 *
 */
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { roleAccessesService } from '@/api/roleAccess';
import generateMenuTree from '@/utils/generateMenuTree';

export const useMenuStore = defineStore('menu', () => {
  const state = reactive({
    authMenus: [], //经过权限过滤后的用户菜单
  });
  // 根据用户的角色获取对应的菜单
  const getAccessByRoles = async (roles) => {
    const res = await roleAccessesService(roles);
    const { list } = res.data;
    state.authMenus = generateMenuTree(list);
    return list;
  };
  return {
    state,
    getAccessByRoles,
  };
});
