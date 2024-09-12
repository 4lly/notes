/*
 * @Author: cirs
 * @Date: 2024-09-11 13:21:06
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 18:42:56
 * @FilePath: /vue3-auth/src/main.ts
 * @Description:
 *
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons-vue';

import '@/premissions';
const app = createApp(App);
for (const [key, component] of Object.entries(Icons)) {
  // 注册全局图标组件
  app.component(key, component);
}
app.use(router);
app.use(createPinia());
app.use(ElementPlus);
app.mount('#app');
// 访问环境变量
// console.log(process.env, '=====env');
