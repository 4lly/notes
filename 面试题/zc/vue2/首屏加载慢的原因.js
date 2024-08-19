/**
 *  计算首屏加载时间
 *  DOMContentLoad  performance
 * 
 * 
 *  原因：
 *  网络延时问题
 *  资源文件体积过大
 *  资源是否重复发起请求去加载了
 *  加载脚本的时候，渲染内容堵塞
 * 
 *  解决方案：
 * 
 *  减少入口文件体积：常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，
 *                  使得入口文件变小，加载速度大大增加
 *                  以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定路有时，才会加载路由组件
 *  静态资源本地缓存： 后端返回资源问题，采用 http 缓存，设置Cach-Control，Last-Modified，Etag等响应头；采用
 *                                  Service Worker离线缓存
 *                  前端合理利用 localstorage
 *  ui 框架按需加载 按需引入
 *  组件重复打包   假设 a.js文件是一个常用的库，现在有多个路由使用了该文件，这就造成了重复下载，
 *                解决：在 webpack 的 config 中，修改CommonsChunkPlugin配置  minChunk：3
 *                      表示会把使用 3 次以上的包抽离出来，放进公共依赖文件，避免重复加载组件
 *  图片资源压缩  雪碧图
 *  gzip
 *  ssr
 * 
 *  页面渲染优化：优化 html 代码 
 *                  ：js 外链放在底部
 *                   css 外链放在顶部
 *                   减少 dom 数量 
 *              优化 js、css 
 *                  ：使用 webworker
 *                    长任务分片执行
 *                    减少重绘、重排
 *                    降低 css选择器复杂性
 *              优化动画效果
 *                   ：使用requestAnimationFrame
 *                      使用transform和opacity属性来实现动画
 *                      合理使用will-change 或translate来提升某些元素到新的合成层
 * 资源加载优化： 减少资源大小
 *                    ：代码压缩，gzip，图片压缩，代码拆分
 *              减少 http 请求次数
 *                    ：http 强缓存
 *                      service worker 
 *                      本地储存（localstorage等）
 *                      请求合并（nginx-http-concat 模块/雪碧图等）
 *              提高http 请求响应速度
 *                    ：cdn
 *                      http 弱缓存       
 *                      dns prefethch
 *                     http2
 *               优化资源加载时机
 *                    ：按需加载
 *                      懒加载
 *                      预加载（preload 等）
 *               优化资源、内容加载方式
 *                     ：内容直出
 *                      客户端内h5页可以考虑离线包等方式
 *  
 * 
 */