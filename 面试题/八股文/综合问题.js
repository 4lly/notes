/**
 * * 1、跨域请求之前的options 请求？
 * options请求，是跨域请求之前的预检查，检查服务器是否支持
 * 浏览器自行发起的，无需我们干预
 * 不会影响实际的功能
 * 
 * 2、for...in for...of 区别
 * for...in:用于可枚举数据，如对象，数组，字符串，得到key 
 * for...of: 用于可迭代数据，如数组，字符串，Map，Set，得到value
 * 遍历对象：for...in
 * 遍历Map，set：for...of
 * 遍历迭代器：for...in
 * 
 * 3、js内存泄漏的场景有哪些
 * 被全局变量、函数引用、全局事件、定时器引用、自定义事件引用、组件销毁时未清除，
 * 
 * 4、vdom真的很快嘛？
 * react、vue、都是使用vdon实现组件更新
 * 用js对象模拟dom节点数据
 * 原生dom操作最快，但是组件化、使用数据驱动dom更新 不能全部更新，大量的重排重绘，会造成页面卡顿，所以配合diff算法 得出最少更新，合适的mvvm框架的方案
 * 
 * 5、H5首屏优化？
 * 路由懒加载，路由拆分，优先保证首页加载（适用Spa）
 * 服务端渲染SSr，ssr渲染过程简单，所以性能好
 * 如果是纯H5页面，是性能优化的终极方案
 * App预取
 * 分页、上拉加载
 * 图片懒加载、提前预设图片尺寸、默认只显示文本内容
 * hybrid，提前将html、js、css下载到本地，用file协议拉取
 * 
 * 6、后端一次性返回10w数据，前端如何处理？
 * 主动沟通技术方案设计不合理
 * js处理没问题，渲染到dom会非常卡顿
 * 自定义中间层、成本较高、
 * 虚拟列表，只渲染可是区域的dom，其他区域的隐藏
 * 
 * 7、vue做过的优化？
 * v-if和v-show、v-for使用key、computed缓存数据、keep-alive缓存组件、异步加载组件、路由懒加载、ssr
 * 
 * 8、vue遇到的问题？
 * 内存泄漏： 全局变量、函数引用、全局事件、定时器引用、自定义事件引用、组件销毁时记得清除
 * vue2响应式的缺陷：新增/删除属性需要使用Vue.set/Vue.delete,无法直接修改数组数据
 * 路由切换时，scroll到顶部：如列表页，滚动到第二屏，点击进入详情页，再返回列表页（组件重新渲染了），就到scroll到顶部，解决办法：缓存scrollTop值，缓存数据、
 * 
 * 9、react组件为什么会重新渲染？
 * state 或者 props 发生变化、父组件重新渲染
 * 
 * 10、react做过的优化？
 * 修改css模拟v-show
 * 循环使用key
 * 使用fragment（<></>）、减少层级
 * jsx中不要定义函数，将函数放到外面
 * 在构造函数中bind this
 * 使用shouldComponentUpdate、React.PureComponent、React.memo
 * 使用hooks缓存数据（useMemo）和函数（useCallback）要搭配React.memo使用，因为父组件重新渲染会导致子组件重新渲染
 * 异步组件、路由懒加载、ssr、使用不可变数据（使用immer工具）
 * 
 * 11、react遇到的问题？
 * 自定义组件名称首字母要大写
 * js关键字的冲突，for改成htmlFor，class改为className
 * jsx的数据类型
 * setState是异步更新的
 * 
 * 12、如果H5加载很慢 如何排查性能问题？
 * 判断是哪儿慢？使用lightouse
 * first Paint（FP，页面第一次渲染），
 * first Contentful Paint（FCP 页面第一次有内容的渲染），
 * first Meaningful Paint（FMP 页面第一次有意义的渲染）已弃用、改成了LCP，
 * DomContentLoaded（DCL 页面内容全部渲染出来了）
 * largest Contentful Paint（LCP，页面最大的内容渲染出来了）
 * Load（L）
 * 
 * 加载慢？还是渲染慢？
 * 
 * 加载慢？
 * 优化服务器硬件配置，使用CDN
 * 路由懒加载，大组件异步加载-减少主包的体积
 * 优化Http缓存策略
 * 
 * 渲染慢？
 * 优化服务端接口
 * 优化前端组件内部的逻辑
 * 服务端渲染Ssr
 */
