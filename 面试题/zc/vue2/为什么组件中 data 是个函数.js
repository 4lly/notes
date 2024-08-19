/**
 *  在 vue 底层中，每次创建组件的时候，都会 new 一个vueComponent实例对象，他们的data 会挂载到vuecomponent的原型上共享，
 *  如果是一个对象的话，所有人都可以修改，状态会互相影响，但是如果是一个函数返回值，就可以创建一个私有作用域来避免这个问题
 * 
 * 
 */