/**
 * 1、vue响应式原理
 * 核型api-Object.defineProperty
 * 
 * 
 * // 触发更新视图
 * function updateView () {
 *    // todo
 * }
 * 
 * // 重新定义数组原型
 * const oldArrayProperty = Array.prototype
 * // c创建新对象，原型指向oldArrayProperty，在扩展新的方法不会影响原型
 * const arrProto = Object.create(oldArrayProperty)
 * ['push','pop,'shift','unshift','splice].forEach (methodName => {
 *    arrProto[methodName] = function () {
 *        updateView() // 触发更新视图
 *        oldArrayProperty[methodName].call(this, ...arguments)     
 *    }
 * })
 * 
 * 
 * // 重新定义属性 监听起来
 * function defineReactive (target, key, value) {
 *    // 深度监听
 *    observer(value)
 *    // 核心api
 *    Object.defineProperty (target,key,{
 *      get() {
 *        return value
 *      },
 *      set(newValue) {
 *        if(newValue !== value) {
 *          // 深度监听
 *          observer(newValue)
 *          // 设置新值
 *          // 注意 value 一直在闭包中，此处设置之后，在get时也是新值
 *          value = newValue
 *          // 触发更新视图
 *          updateView()
 *        }
 *      }
 *    })
 * }
 * 
 * // 监听对象属性
 * function observer (target) {
 *    if (typeof target !== 'object' || target === null) {
 *        // 不是对象或数组
 *        return target
 *    }
 *    if (Array.isArray(target)) {
 *        target.__proto__ = arrProto
 *     }
 *    // 重新定义各个属性（for in 可遍历数组）
 *    for (let key in target) {
 *        defineReactive(target,key,target[key])
 *    }
 * }
 * 
 * 
 * // 准备数据
 * const data = { 
 *    name:'lly',
 *    age:18,
 *    info:{ address:'北京'},
 *    nums:[1,2,3,4]
 *  }
 * 
 * // 监听数据
 * observer(data)
 * // 测试
 * data.name = 'lisi'
 * data.age = 21
 * data.x = '100'// 新增属性，监听不到，所以有Vue.$set
 * delete data.name // 删除属性，监听不到，所以有Vue.$delete
 * data.info.address = 'cs' // 深度监听
 * data.nums.push(5) // 监听数组
 * 
 * 
 * 
 * 缺点：
 * 1、深度监听 需要递归到底，一次性计算量大
 * 2、无法监听新值/删除属性
 * 3、无法监听数组、需作特殊处理
 * 
 * 
 */


