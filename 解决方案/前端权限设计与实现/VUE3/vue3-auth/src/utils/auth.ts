/*
 * @Author: cirs
 * @Date: 2024-09-11 14:49:40
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 16:23:25
 * @FilePath: /vue3-auth/src/utils/auth.ts
 * @Description:
 *
 */
const TOKEN = 'token';
export const getToken = () => {
  return localStorage.getItem(TOKEN);
};
export const setToken = (token) => {
  return localStorage.setItem(TOKEN, token);
};
export const removeToken = () => {
  return localStorage.removeItem(TOKEN);
};

const REFRESH_TOKEN = 'refresh_token';
export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN);
};
export const setRefreshToken = (refresh_token) => {
  return localStorage.setItem(REFRESH_TOKEN, refresh_token);
};
export const removeRefreshToken = () => {
  return localStorage.removeItem(REFRESH_TOKEN);
};
