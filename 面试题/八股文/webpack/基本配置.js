/*
 * @Author: cris
 * @Date: 2023-08-02 14:52:50
 * @LastEditors: cris
 * @LastEditTime: 2023-08-05 16:07:05
 * @FilePath: /面试题/八股文/webpack/基本配置.js
 * @Description: 
 * 
 */

/**
 * webpack 是一个前端打包构建的工具
 * 前端为什么要进行构建和打包？
 * 
 * module chunk bundle分别什么意思？有什么区别？
 * module：各个源码文件，webpack中一切皆模块
 * chunk：多模块合并成的，如entry，import(),splitChunk
 * bundle: 最终输出文件
 * 
 * webpack如何实现懒加载？
 * import()
 *  
 * 
 * babel-runtime和babel-polyfill的区别？
 * loader和plugin的区别？
 * 
 * 
 * 
 * loader 相关处理 都是在module中的rules设置对应loader
 * 多个loader执行顺序 从后往前
 * 
 * module：{
 *    rules:[
 *      {
 *        test:/\.css$/,
 *        use:['loader1','loader2'] || ''loadername' || {
 *            loader:'loadername',
 *            options:{},//配置
 *        }，
 *        include:'',
 *        exclude:''
 *      }
 *    ]
 * }
 * 
 *plugin 相关处理都是在plugins里面配置
  plugins:[plugin1、plugin2] 
 * 
 * 1、拆分配置和merge
 * 拆成公共配置、生产配置、开发配置 然后通过merge合并配置
 * 
 * 2、启动本地服务、设置代理 
 * 本地服务：devSever ，设置代理 ：proxy
 * 
 * 
 * 
 * 3、处理ES6   babel-loader
 * 
 *   配置.babelrc文件(preset-env)
 * 
 * 4、处理样式 style-loader、css-loader、postcss-loader、less-loader
 * 5、处理静态资源如图片  file-loader webpack5 默认已经支持 
 * 可配置options进行配置
 * limit：5*1024 小于5kb用base64产出
 * output：'/img/' 打包到img目录下
 * public 设置图片的cdn地址
 * 
 * 6、清空output.path文件夹
 * CleanWebpackPlugin
 */