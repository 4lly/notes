// 宏任务和微任务有哪些？
/***
 *  宏任务：  script setTimeout setInterval setImmediate   I/O, UI rendering
 *
 *  微任务：  promise.then   process.nextTick   Object.observe  MutationObserver
 *
 *  注意： promise 是同步任务
 *
 */

// setImmediate 将其中的函数放到 c++线程中去执行，然后将其放到任务队列中 不会影响主线程的执行 一般用于大量计算型任务 

// setTimeout优先级高于 setImmediate

// promise.nextTick

// 同步代码执行顺序优先级高于异步代码执行顺序优先级
// new promise(fn) 中的 fn 是同步执行的 
// process.nextTick > Promise.then > setTimeout > setImmediate

// Object.observe它是一个可以异步观察Javascript中对象变化的方法，而无需你去使用一个其他的JS库
//               它允许一个观察者接收一个按照时间排序的变化记录序列，这个序列描述的是一列被观察的对象所发生的变化

// MutationObserver 监听 dom 变化  但是是异步触发 等到当前所有的 dom 操作都结束后再触发


/**
 *   宏任务和微任务都是怎么执行的？
 *   执行宏任务 script 
 *   进入 script 后，所有同步任务主线程执行
 *   所有宏任务放入宏任务执行队列  微任务放入微任务执行队列
 *   主线程完成后先清空所有微任务 
 *   再取一个宏任务执行 再清空微任务
 *   依次循环
 */