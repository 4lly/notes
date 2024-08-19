// 字面量
// 字面量创建对象更简单，方便阅读
// 不需要作用域解析，速度更快

// new 内部 
// 创建一个新对象
// 使新对象的_proto_指向原函数的 prototype
// 改变 this 指向(指向新的obj)并执行该函数，执行结果保存起来作为  
// 判断执行函数的结果是不是 null 或者undefined，如果是则返回之前的新对象，不是返回 result

//手写
function myNew(fn, ...args) {
  //创建一个空对象 
  let obj = {}
  // 使空对象的隐式原型指向原函数的显示原型
  obj.__proto__ = fn.protptype
  // this 指向 obj 
  let result = fn.apply(obj, args)
  //返回
  return result instanceof Object ? result : obj
}

