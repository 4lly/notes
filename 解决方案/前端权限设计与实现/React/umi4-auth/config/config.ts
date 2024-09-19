/*
 * @Author: cirs
 * @Date: 2024-09-12 20:29:12
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-19 13:52:21
 * @FilePath: /umi4-auth/config/config.ts
 * @Description:
 *
 */
import { defineConfig } from '@umijs/max';
import routes from './routes';
// defineConfig可以帮助进行配置文件的编写
export default defineConfig({
  npmClient: 'npm', //npm客户端选择npm
  styledComponents: {}, // 启用styled-components样式方案
  routes,
  antd: {}, //集成antd组件库
  request: {},
  // proxy: {
  //   '/api': {
  //     target: 'xxx',
  //     changeOrigin: true,
  //   },
  // },
  model: {}, //内置了数据流管理插件，他是一种基于hooks范式的轻量级数据管理方案
  initialState: {}, //初始状态插件
  layout: {
    title: 'you app title',
  },
  access: {},
});
