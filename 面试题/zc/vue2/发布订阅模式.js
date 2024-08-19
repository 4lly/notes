/**
 *    data中的每一个数据都绑定一个 dep，这个 dep中都存有所有用到该数据的观察者。
 *    
 *    当数据改变时，发布消息给dep（依赖收集器），去通知每一个观察者，做出对应的回调函数
 * 
 *    
 * 
 */

const dep = new Dep()

Object.defineProperty(obj, key, {
  enumerable: true,   // 表示能否通过for in循环访问属性，默认 false
  configurable: false,   //表示能否通过delete 删除属性从而重新定义属性，能否修改属性的的特性，能否把属性修改为访问器属性，默认 false
  writable: false, // 表示能否修改属性的值，默认 false
  value: undefined,  // 包含这个属性的数据值，默认 undefined
  get() {
    // 订阅数据变化时，在 dep 中添加观察者
    Dep.target && dep.addSub(Dep.target)
    return value
  },
  set: (newVal) => {
    if (newVal != value) {
      this.observe(newVal)
      value = newVal

    }
    // 告知 Dep通知变化
    dep.notify()
  }
})