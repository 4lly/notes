function myInstanceof (instance, origin) {
  if (instance == null) return false; // null undefined
  const type = typeof instance;
  if (type !== 'object' && type != 'function') return false; // 值类型
  let tempInstance = instance; //w为了防止修改
  while (tempInstance) {
    if (tempInstance.__proto__ === origin.prototype) {
      return true;
    }
    // 未匹配
    tempInstance = tempInstance.__proto__; //顺着原型往上找
  }
  return false;

}

// 功能测试
console.log(myInstanceof({}, Object));