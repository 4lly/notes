/****
 *  父子组件的生命周期是一个嵌套的过程
 *  渲染的过程
 *  父 beforeCreate =》 父created =》 父 beforeMount =》子beforeCreate =》 子created =》 子beforeMount =》 子mounted =》 父 mounted
 *  子组件更新过程
 *  父 beforeUpdate =》 子beforeUpdate =》 子updated =》 父 updated
 * 
 *  父组件更新过程
 *  父beforeUpdate =》 父updated
 *  销毁过程
 *  父 beforeDestory =》 子 boforeDestory =》 子 destoryed =》 父destoryed
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */