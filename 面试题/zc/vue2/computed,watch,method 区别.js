/**
 *    computed 
 *    计算属性，依赖其他属性，当其他属性改变的时候下一次获取 computed值时也会改变，computed的值会有缓存
 * 
 *    watch
 *    类似于数据改变后的回调
 *    如果想要深度监听，后面加一个deep：true
 *    如果想监听完成立马运行，后面加一个 immediate：true
 *    
 *    method
 *    使用method的时候，是这样使用{{fn(xx)}} ,渲染的时候如果没有发生变化，这个也是会被执行的，而 computed是有缓存的，如果没有变化就不用去执行了
 * 
 *
 */