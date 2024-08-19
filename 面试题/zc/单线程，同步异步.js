// 为什么 js 是单线程的？
// 因为 js 里面有可视的dom，如果是多线程的话，这个线程正在删除 dom 节点，那个线程正在编辑 dom节点，导致浏览器不知道听谁的


// 手写 promise  


// 以下代码执行顺序

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
async1()
console.log('script start')

//执行到await时，如果返回的不是一个promise对象，await会阻塞下面代码(当前async代码块的代码)，会先执行async外的同步代码(在这之前先看看await中函数的同步代码，先把同步代码执行完)，等待同步代码执行完之后，再回到async内部继续执行
//执行到await时，如果返回的是一个promise对象，await会阻塞下面代码(当前async代码块的代码)，会先执行async外的同步代码(在这之前先看看await中函数的同步代码，先把同步代码执行完)，等待同步代码执行完之后，再回到async内部等promise状态达到fulfill的时候再继续执行下面的代码
//所以结果为
//async1 start
//async2
//script start
//async1 end
