/*
 *  因为首先 vue 本身是组件级更新，更改数据如果非常多的话，更新非常频繁，如果不采用异步更新的话每次都需要重新渲染。
    每次有数据需要更新的时候，vue 会把他放在一个队列，等最后的时候调用 nextTick方法，nextTick 会清空这个队列，
    用户也可以手动调用 nextTick（callback）方法，会同样把回调函数放在队列里面，保证视图更新完成之后被调用（因为会把 callback 放在队列最后面）
    并且依次链式调用


    nextTick 
 *       解释：在下次 dom 更新循环结束之后执行延时回调，在修改数据之后立即使用这个方法，可以获取更新后的 dom
 *       应用：想要在vue 生命周期中的 create（）操作 dom可以使用 vue.nextTick
 *            在数据改变之后要执行的操作，而这个操作要等数据改变后而改变 dom结构的时候才能进行，需要用到 nextTick
 * 
 *  nextTick是微任务还是宏任务
 *        nextTick的内部实现如果支持promise那就是用 promise，没有就是MutationObserver（微任务），在没有就是setImmediate（宏任务）
 *        没有就用 settimeout，所以 nextTick 可以是宏任务也可以是微任务
 *  
 * 
 * 
 * 
 */