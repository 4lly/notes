
//  *  mode 
//  *    打包模式
//  *      production 线上环境打包
//  *      development 开发环境打包
//  *    一般会把开发环境和生产环境分为两个文件
//  *      Webpack.base.config.js 公共配置
//  *      Webpack.dev.config.js  开发环境配置
//  *      Webpack.base.config.js 生产环境配置
//  *      在使用webpack-merge 中的smart 进行合并
//  *    
//  *   entry
//  *      入口文件
//  * 
//  *    output
//  *      输出文件
//  * 
//  *    devServer
//  *      热更新
//  *      内部还有一个proxy，可以进行网络请求转发代理配置

//  module/rules中可以配置loader // 执行顺序，从下往上加载

module: {
  rules: [
    {
      //webpack 默认不能处理 css模块
      test: /\.css$/,  //以css为结尾的文件
      loader: [          // 执行顺序，从下到上
        'style-loader', //将 css 插入到 style 标签
        'css-loader', //处理 css 之间的依赖关系
        'postcss-loader', //处理 css的兼容性，他会依赖一个autoprefixer，顺便在package.json中配置browerslist（用来配置目标环境）
        'sass-loader' //处理预处理器
      ]

    }
  ]
}
// 以上的是把css 编译到 js 中的，但是如果想抽离还需要一个插件
plugins: [
  new MiniCssExtractPlugin({
    filename: 'css/main[contentHash:8].css'
  })
]



module: {
  rules: [
    {
      test: /\.css$/,
      loader: [
        MiniCssExtractPlugin.loader,  // 将 css 插入到 link 中引入
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
  ]
}

// 处理图片

// 开发环境
module: {
  rules: [
    {
      //webpack 默认不能处理 图片 模块的
      test: /\.(png|jpg)$/,    //以 png或jpg 为结尾的文件
      loader: [ //执行顺序，从下往上
        'file-loader',
      ]
    },
  ]
}


// 生产环境
module: {
  rules: [
    {
      //webpack 默认不能处理 图片 模块的
      test: /\.(png|jpg)$/,    //以 png或jpg 为结尾的文件
      use: {
        loader: 'url-loader',
        options: {
          limit: 5 * 1024 //小于这个范围的时候通过 base64 解析，可以减少 http 请求
        }
      }
    },
  ]
}

optimization: { //用来分包和压缩
  // 代码压缩
  minimizer: [
    // 压缩 JS
    new TerserPlugin(),
    // 压缩 css
    new OptimizeCssAssetsWebpackPlugin()
  ]

  // 代码分割
  splitChunks: {
    // 分两种代码分割
    // 同步代码 例如 import {lodash} from 'lodash'
    // 异步代码 例如 import('lodash')
    // all 对同步代码、异步代码都做分割
    // async 只对异步代码分割
    // initial 只对同步代码分割
    chunks: 'all';
    cacheGroups: {
      //
    }
  }
}

// plugins 和loader 的区别？
// loader 是解析规则，因为webpack默认只解析 js，所以需要在loader 里面配置一些规则
// plugins plugin 是插件，用来拓展 webpack的功能的，比如压缩代码，提取公共代码等

// 输出文件名hash，chunkhash和 contenthash有什么区别？
/*  hash 模式
 *    只要修改一个文件，整个项目的文件命名都会改变，不能进行缓存

 *  chunkhash 模式
      根据入口文件命名

    contenthash模式
      根据内容声明命名，进行缓存
 *
 */

// 什么是polyfill？
// 实际上就是针对各个浏览器的 js 差异做出的抹平处理，比如html5 的 localStorage，sessionStorage，不同浏览器不同版本有些支持，有些不支持，
// 这个时候就需要 polyfill 把这些差异抹平

// 什么是tree-shaking？
// 在做项目的时候，难免会封装一些方法，但是可能只引用了部分方法，如果正常打包，其他未引用的方法也会打包到 bundle 中
// 用 tree-shaking就不会把多余的内容打包了

// webpack externals是做什么的？
// 不想把某个东西打包出来，就可以用 externals，而是用cdn

// babel原理?
// 把 js 代码转换成ast 语法树，再根据语法树生成对应的 es5 代码

// jsbridge
// 主要是给 JavaScript 提供调用 Native 功能的接口，让混合开发中的前端部分可以方便地使用 Native 的功能
// 写树的结构
// webpack 从0搭建 （图片处理等等）
// Es6转 es5 babel-loader
// 图片 url-loader

// webpack 常见的 loaders？
// vue-loader 加载 vue 文件
// babel-loader 加载 js 文件并用 babel 转换，可配置.babelrc 文件
// file-loader 加载图片或其他媒体文件，解析 url
// url-loader 与file-loader基本想同，但是对于小于指定limit 大小的图片，会转换成 base64这样做可以减少网络请求，但会增加打包后的文件大小
// svg-sprite-loader  加载 svg并组装成雪碧图

// 自定义 loader？
// 使用一个loaderUtils 可以获取loader 配置的 options（ 一个getOptions的 API），然后再进行一系列操作，最后 return。
// 然后把这个方法 model.exports 就可以了

//  vite 为什么这么快?
// 部分文件设置了强缓存，每次在本地读取
// 采用 esbuild  采用 go 语言，更接近机器码，大量使用并发算法

// vite 和 webpack 的区别
/* webpack 是 node 编写的，vite 是 go，接近机器码，而且使用 esbuild 预构建依赖，打包会比之前快 之前快 10-100 倍
 * 热更新的时候，webpack 需要重新构建整个包，而 vite 只需要构建修改了的模块，而且 vite 使用了浏览器缓存来加速构建
    vite 生态没有 webpack 丰富，webpack 的 loader 个 plugin相当丰富

 */

