/*
 * @Author: cirs
 * @Date: 2024-09-11 13:21:06
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 17:31:02
 * @FilePath: /vue3-auth/vite.config.ts
 * @Description:
 *
 *
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env); // 获取环境变量
  return {
    // 开发或生产环境服务的公共基础路径
    base: '/',
    // 将目录设定为静态资源服务目录，可设置 false 关闭
    publicDir: 'public',
    // 存储缓存文件的目录。此目录下会存储预打包的依赖项或 vite 生成的某些缓存文件，使用缓存可以提高性能。默认为 .vite
    cacheDir: '.vite',
    envPrefix: ['VITE', 'VUE'],
    // 定义全局常量
    // 环境变量前缀,默认只会暴露VITE开头变量，定义后可暴露VUE开头变量
    define: {
      'process.env.VITE_USER_NODE_ENV': JSON.stringify(env.VITE_USER_NODE_ENV),
      'process.env.VITE_TEXT': JSON.stringify(env.VITE_TEXT),
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        watchFiles: true,
        cors: true,
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
      extensions: [
        '.mjs',
        '.js',
        '.mts',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
      ],
    },
    server: {
      port: 3000,
      open: true,
      // proxy: {
      //   '/api': {
      //     target: 'http://127.0.0.1:3000',
      //     ws: true,
      //     changeOrigin: true,
      //     rewrite: (path: any) => path.replace(/^\/api/, ''),
      //   },
      // },
    },
    // 构建选项：输出目录、存放静态资源的目录、静态资源内联限制、CSS代码拆分、是否生成sourcemap文件、删除console和debugger、rollup打包规则配置等
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      cssCodeSplit: true,
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true, // 生产环境下去除console
          drop_debugger: true, // 生产环境下去除debugger
        },
      },
      rollupOptions: {
        input: {
          main: fileURLToPath(new URL('index.html', import.meta.url)),
        },
        output: {
          manualChunks: {
            vue: ['vue'],
          },
        },
      },
    },
  };
});
