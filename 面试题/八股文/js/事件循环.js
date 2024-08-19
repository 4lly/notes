// 1、请问 js 如何执行？
// 从前到后，一行一行执行 
// 如果某一行执行报错 则停止下面代码的执行
// 先把同步代码执行完，在执行异步代码

// 2、请问 eventloop 过程？ (不考虑宏任务微任务 dom渲染)
// 同步代码、一行一行放在执行栈(call Stack)执行
// 遇到异步，会先"记录"下，等待时机（定时、网络请求等，WebApis）
// 时机到了，就移动到回调队列（callback Queue）
// 如果执行栈(call Stack)为空，即同步代码执行完，event loop开始工作
// 轮询查找回调队列（callback Queue），如果有则移动到执行栈(call Stack)执行
// 然后继续轮询查找（永动机一样）

// 3、完整的eventloop 过程？(考虑宏任务微任务 dom渲染)
// 同步代码、一行一行放在执行栈(call Stack)执行
// 遇到异步，会先"记录"下，等待时机（定时、网络请求等，WebApis）
// 时机到了，就移动到回调队列（callback Queue）
// 如果执行栈(call Stack)为空，即同步代码执行完 *
// 执行当前的微任务 **
// 尝试尝试dom渲染 ***
// 触发event loop、轮询查找回调队列（callback Queue），如果有则移动到执行栈(call Stack)执行 ****
// 然后继续轮询查找（永动机一样）


// 3、什么是宏任务macroTask 和微任务microTask？
// 宏任务：setTimeout、setInterval、Ajax、Dom事件
// 微任务：Promise、async/awaits
// 微任务执行时机要比宏任务要早


// 4、eventloop 和 Dom 渲染？
//  js是单线程的，而且和Dom渲染共用一个线程，js执行的时候，得留一些时机供Dom渲染
// 每次call Stack清空(即每次轮询结束)，即同步任务执行完，都是dom重新渲染的机会，
// dom结构如果有改变则重新渲染，然后再去出发下一次event loop

// 5、宏任务macroTask 和微任务microTask 的区别？
// 宏任务：Dom 渲染后触发 浏览器规定的
// 微任务：Dom 渲染前触发 ES6语法规定的


// 6、从eventloop 解释 为什么微任务执行时机要比宏任务要早？
// 当执行到Promise时 不会经过WebApis会把它放到 micro task queue  因为promise是ES规范不是W3C规范