// 1、三种状态
// pending resolved rejected
// pending=>resolved 或者 pending=>rejected 
// 变化不可逆


// 2、状态的表现
// pending状态 不会触发then和catch
// resolved 状态，会触发后续的then的回调函数

// 3、then和catch对状态的影响
// then正常返回resolved，里面有报错则返回rejected
// catch正常返回resolved，里面有报错则返回rejected

// 4、promise 和 async/await 的关系
// promise 解决异步回调（callback hell），promise then catch 链式调用，但也是基于回调函数
// async/await 是同步语法，是消灭回调函数的终极武器，但和promise并不互斥，相辅相成
// 执行async函数，返回的是promise对象
// await 相当于执行promise的then
// try。。。catch可捕获异常，代替了promise的catch


// 5、手写promise加载一张图片
function loadImg (src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error(`图片加载失败====${src}`));
    };
    img.src = src;

  });
}