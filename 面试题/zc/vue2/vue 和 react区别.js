/*  相同点
 *        ：都有组件化思想
            都支持服务端渲染
            都是单向数据流
            都有 virtual dom 
            数据驱动视图
            都有支持 native的方案（vue的 weex， react 的react native）
            都有自己的构建工具 vue 的 vue-cli  react 的create react app

 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  不同点
 *        vue 双向数据绑定           react 单向数据绑定
 *        数据变化的实现原理不同。     react使用不可变的数据，vue 使用可变数据
 *        组件化通信的不同。          react中我们使用回调函数通信，vue 中子组件向父组件传递消息可以用事件和回调函数
 *        diff 算法不同。           react主要使用diff队列保存需要更新哪些 dom，得到 patch树，再统一操作批量更新 dom。vue 使用双向指针，边对比，边更新dom
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */