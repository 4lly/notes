/*
 * @Author: cris
 * @Date: 2023-07-31 13:12:48
 * @LastEditors: cris
 * @LastEditTime: 2023-08-04 16:02:06
 * @FilePath: /面试题/手写面试题/手写发布订阅.js
 * @Description: 
 * 
 */
class EventBus {

  constructor() {
    this.events = {};
  }

  on (type, fn, isOnce = false) {
    const events = this.events;
    if (events[type] == null) {
      events[type] = [];//初始化key的fn数组
    }
    events[type].push({ fn, isOnce });
  }

  once (type, fn) {
    this.on(type, fn, true);
  }

  off (type, fn) {
    if (!fn) {
      this.events[type] = [];
    } else {
      const fnList = this.events[type];
      if (fnList) {
        this.events[type] = fnList.filter(item => item.fn != fn);
      }
    }
  }

  emit (type, ...args) {
    const fnList = this.events[type];
    console.log(fnList);
    if (fnList == null) return;
    this.events[type] = fnList.filter(item => {
      const { fn, isOnce } = item;
      fn(...args);
      if (!isOnce) return true; //过滤once
      return false;
    });
    console.log(this.events[type]);

  }
}


//测试
const bus = new EventBus();
function fn1 (a, b) {
  console.log('fn1', a, b);
}
function fn2 (a, b) {
  console.log('fn2', a, b);
}

function fn3 (a, b) {
  console.log('fn3', a, b);
}

bus.on('key1', fn1);
bus.on('key1', fn2);
bus.once('key1', fn3);
bus.on('key1', fn3);

bus.emit('key1', 10, 20); // 触发 fn1 fn2 fn3
bus.off('key1', fn1);
bus.emit('key1', 100, 200); // 触发fn2 
