//  requestAnimationFrame请求数据帧可以用作动画执行
//  可以自己决定什么时机调用该回调函数
//  能保证每次屏幕刷新的时候只被执行一次
// 页面被隐藏或者最小化的时候暂停执行，返回窗口继续执行 有效节省 cpu


var s = 0
function f() {
  s++
  console.log(s);
  if (s < 999) {
    window.requestAnimationFrame(f)
  }
}
window.requestAnimationFrame(f)
