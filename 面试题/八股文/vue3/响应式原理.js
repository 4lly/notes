
/**
 * const data = {name:'ll',age:23}
 * const proxyData = new Proxy(data, {
 *  get(target, key, receiver){
 *    const result = Reflect.get(target,key,receiver)
 *    retuen result
 *  },
 * set(target, key ,val, receiver){
 *    const result = Reflect.set(target,key,val,receiver)
 *     retuen result
 * },
 * deleteproperty(target, key){
 *    const result = Reflect.deleteproperty(target,key)
 *    retuen result
 * }
 * })
 * 
 * Reflect和proxy能力一一对应
 * 规范化、标准化、函数化、
 * 替代掉Object上的工具函数
 * 
 * 
 * 
 * 1、创建响应式
 * function reactive(target={}) {
 *    if (typeof target !== 'object' || target === null) {
 *        // 不是对象或数组
 *        return target
 *    }
 *    // 代理配置
 *    const proxyConfig = {
 *        get(target, key, receiver){
 *            const result = Reflect.get(target,key,receiver)
 *            // 深度监听
 *            retuen reactive(result)
 *        },
 *        set(target, key ,val, receiver){
 *           const result = Reflect.set(target,key,val,receiver)
 *           retuen result
 *        },
 *        deleteproperty(target, key){
 *            const result = Reflect.deleteproperty(target,key)
 *            retuen result
 *         }
 *    }
 *    // 生成代理对象
 *    const observed = new Proxy(target,proxyConfig)
 *    return observed
 * }
 * 
 * let data = {
 *    name:'lly',
 *    age:19,
 *  }
 * const proxyData = reactive(data)
 * 
 * 
 * 深度监听 性能更好
 * 可监听新值、删除属性、可监听数组变化
 * 无法兼容所有浏览器、无法polyfill
 */
