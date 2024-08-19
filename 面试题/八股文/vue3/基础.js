/**
 * 1、ref、toRef、toRefs
 * ref：生成值类型的响应式数据、可用于 模版 和 reactive、通过 .value 修改值、建议命名xxxRef
 * reactive：生成对象的响应式数据，setup中建议使用toRefs后再返回
 * toRef：针对一个响应式对象（reactive封装）的prop、创建一个ref、具有响应式、两者保持引用关系,let xxRef = toRef(state,key)
 * toRefs：将响应式对象（reactive封装）转为普通对象，对象的每个pop都是对应的ref、两者保持引用关系、合成函数返回响应式对象时使用toRefs， let xxRefs = toRefs(state)，可直接返回
 * 
 * 2、为何需要ref ?
 * 返回值类型、会丢失响应式
 * 在setup、computed，合成函数中，都有可能返回值类型
 * Vue不定义ref、用户也要自定义ref、将会造成混乱
 * 
 * 3、为何需要.value ?
 * ref是一个对象（不丢失响应式），value存储值
 * 通过.value属性的get和set实现响应式
 * 用于模版、reactive不需要.value、其他情况都需要
 * 
 * 
 * 3、为何需要toRef、toRefs ?
 * 在不丢失响应式的情况下，把响应式对象（reactive封装的）非普通对象数据 分解/扩散，不是创造响应式、而是延续响应式
 * 
 * 4、vue升级了哪些重要功能
 * vue3:creatApp、多事件、emits属性、fragment、生命周期、移除.sync 使用v-model、异步组件的写法（defineAsyncComponent）、移除filter、suspense、composition api、teleport
 * vue2:new Vue()
 * 
 * 5、composition Api实现逻辑复用
 * 抽离代码到一个函数
 * 函数命名约定为useXXX格式
 * 在setup中引用useXXX函数
 * 
 * 6、如何setup中获取组件实例？
 * 在setup和composition Api中 没有this，需通过 getCurrentInstance获取实例
 */