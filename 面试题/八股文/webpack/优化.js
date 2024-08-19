/*
 * @Author: cris
 * @Date: 2023-08-05 16:04:09
 * @LastEditors: cris
 * @LastEditTime: 2023-08-05 16:05:49
 * @FilePath: /面试题/八股文/webpack/优化.js
 * @Description: 
 * 
 */
/**
 * 
 * webpack常见性能优化？？？？ ********
 * 
 * 1、优化打包构建速度-开发体验和效率？
 * 优化babel-loader 开启缓存
 * {
 *        test:/\.js$/,
 *        use:['babel-loader?cacheDirectory'],// 开启缓存
 *        include:path.resolve(__dirname,'src')// 明确范围
 * }
 * ignorePlugin  避免引用无用模块 直接不引入、代码中没有 可减少产出体积
 * //忽略moment下的/locale目录
 * new webpack.IgnorePlugin(/\.\/locale/,/moment/)
 * 使用需要的语言包单独引用即可使用
 * noParse 避免重复打包 引入，但不打包
 * module：{
 *    noParse:[/react\.min\.js$/]
 * }
 * happyPack 多进程打包
 * parallelUglifyPlugin 多进程压缩js
 * 自动刷新 watch 
 * watch：true，
 * watchOption：{
 * ignored：'/node_modules/',//忽略哪些
 * aggregateTimeout:300,//监听到多久后去执行动作
 * poll:100,//多久轮训
 * }
 * 热更新 hotModuleReplacePlugin
 * DllPlugin 动态链接库插件
 * 前度框架如react、vue，体积大，构建慢、比较稳定、不常升级版本，同一个版本只构建一次，不用每次都构建，webpack已支持
 * DllPlugin-先预打包dll文件
 * DllReferncePlugin- 使用dll文件
 * 
 * 2、优化产出代码-产品性能？
 * 体积更小、合理分包，不重复加载、速度更快，内存使用更小
 * 小图片base64编码 
 * bundle加hash
 * 懒加载
 * 提取公共代码
 * ignorePlugin
 * cdn加速
 * 使用production
 * 自动开启代码压缩，vue，React等会自动删除调试代码 如 warning，
 * 启动Tree-Sharking(删掉没有用的东西，必须用es6 Module才能让tree-Sharking生效)
 * ES6 Module 静态引入，编译时引入
 * Commonjs 动态引入，执行时引入
 * Scope Hosting
 */