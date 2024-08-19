// 防抖 debounce 使用场景 用户输入结束或者暂停时，才会触发change事件
function debounce (fn, delay = 500) {
  // timer 是闭包中的
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;

    }, delay);
  };

}
// 功能测试
document.addEventListener('keyup', debounce(() => {
  console.log('value----');
}, 1000));

// 节流  throttle 使用场景 窗口缩放 滚动监听 drag  无论多少次 每隔一顿时间执行一次
function throttle (fn, delay = 500) {
  // timer 是闭包中的
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;

    }, delay);
  };
}

// 功能测试
document.addEventListener('drag', throttle((e) => {
  console.log('value----', e.offsetX);
}, 1000));