/**
 * 1、多入口 entry
 * entry： path.join(srcPath,'index.js') || { a出口: 'xxx',b出口:‘xx2' }
 * 多入口对应的多个html插件
 * plugins:[
 *    new HtmlWebpackPlugin({
 *        template:path.join(srcPath,'a.html'),
 *        filename:'a.html'
 *        chunks:['a'],//只引用a.js
 *    }),
 *    new HtmlWebpackPlugin({
 *        template:path.join(srcPath,'b.html'),
 *        filename:'b.html',
 *        chunks:['b'],//只引用b.js
 *    })
 * ]
 * 
 * 2、多出口
 * output:{
 *  filename:[name].[contentHash:8].js ||写死
 *  path：disPath,
 * publicPath:xxx,静态文件的开头
 * }
 * 动态生成可支持单个以及多个出口
 * 
 * 3、抽离压缩css 减小代码体积
 * 安装mini-css-extract-plugin插件
 * 
 * 改写css loader配置
 *    // 抽离css
 *    {
 *        test:/\.css$/,
 *        loader:[MiniCssExtracPlugin.loader,'css-loader','postcss-loader']
 *      },
 *    // 抽离less
 *    {
 *        test:/\.less$/,
 *        loader:[MiniCssExtracPlugin.loader,'css-loader','less-loader','postcss-loader']
 *      } 
 * 压缩css  安装terser-webpack-plugin optimize-css-assets-webpack
 * optimization:{
 *    minimizer:[new TerserJsPlugin({}),new OptimizeCssAssetsPlugin({})]
 * }
 * 
 * 
 * 3、抽离公共代码 让他们相互引用，减少cv操作
 * 
 * optimization: {
 * ...
 *    splitChunks:{
 *        chunks:'all',// initial 入口chunk 对于异步导入的文件不处理； async 异步chunk 只对异步导入的文件处理； all 全部 chunk
 *        // 缓存分组
 *        cacheGroups:{
 *            // 第三方模块
 *            vendor:{
 *                name:'vender'，//chunk名称
 *                priority:1,// 权限优先级
 *                test:/node_modules/,
 *                minSize:0,// 大小限制
 *                minChunks:1,// 最少复用过几次
 *            }
 *            // 公共模块
 *            common:{
 *                name:'common'，//chunk名称
 *                priority:0,// 权限优先级
 *                minSize:0,// 大小限制
 *                minChunks:2,// 最少复用过几次
 *            }
 *        }
 *    }
 * ...
 * }
 * 
 * 修改html插件
 * 
 * new HtmlWebpackPlugin({
 *        template:path.join(srcPath,'a.html'),
 *        filename:'a.html'
 *        chunks:['a','vender','common'],//只引用a.js
 *    }),
 *    new HtmlWebpackPlugin({
 *        template:path.join(srcPath,'b.html'),
 *        filename:'b.html',
 *         chunks:['b','vender','common'],//只引用b.js
 *    })
 * 
 * //4、懒加载
 * 

 * 
 */