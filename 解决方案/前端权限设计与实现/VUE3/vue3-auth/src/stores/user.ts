/*
 * @Author: cirs
 * @Date: 2024-09-11 14:20:29
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 19:38:28
 * @FilePath: /vue3-auth/src/stores/user.ts
 * @Description:
 *
 *
 */
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { authInfoService, login } from '@/api/user';
import {
  removeRefreshToken,
  removeToken,
  setRefreshToken,
  setToken,
} from '@/utils/auth';
export const useUserStore = defineStore('user', () => {
  const state = reactive({
    token: '',
    refresh_token: '',
    userInfo: {},
    roles: null, //当前用户登陆的角色
  });
  const toLogin = async (loginInfo) => {
    try {
      const res: any = await login(loginInfo);
      const { token, refresh_token } = res.data;
      setToken(token);
      setRefreshToken(refresh_token);
      state.token = token;
      state.refresh_token = refresh_token;
    } catch (error) {
      console.log(error);
    }
  };
  const toLoginOut = () => {
    removeToken();
    removeRefreshToken();
    state.token = '';
    state.refresh_token = '';
  };
  const getUserInfo = async () => {
    const res = await authInfoService();
    const { roles, ...userInfo } = res.data;

    state.roles = roles;
    state.userInfo = userInfo;
  };
  return {
    state,
    toLogin,
    toLoginOut,
    getUserInfo,
  };
});
