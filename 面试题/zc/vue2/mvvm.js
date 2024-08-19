/**
 *  数据劫持：vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过object-defineProperty（）来劫持各个属性的 setter，getter
 *          在数据变动的时候发布消息给订阅者，触发相应的监听回调
 * 
 *  阐述一下 mvvm响应式原理 
 *  vue 是采用数据劫持配合发布者-订阅者的模式的方式，通过Object-defineProperty（）来劫持各个属性的 getter 和setter，在数据变动时，
 *  发布消息给依赖收集器（dep中subs），去通知（notify）观察者，做出对应的回调函数，去更新视图。mvvm 作为绑定的入口，整合Observer，
 *  Complie 和Watcher三者，通过Observer来监听 dom数据变化，通过Complite来解析编译模板指令，最终利用watcher搭起Observer，Complite
 *  之间的通信桥路，达到数据变化=》视图更新
 * 
 * 
 * 
 * 
 * 
 * 
 */