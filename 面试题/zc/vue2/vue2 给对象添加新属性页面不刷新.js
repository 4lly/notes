/**
 *  没有通过Object.defineProperty 设置成响应式数据
 *  
 *  vue.$set   (添加少量新属性使用)
 *   
 *  Object.assign()  （添加大量新属性，创建新对象）     this.a = Object.assign({},this.a,{b:1,...})
 * 
 *  $forceUpdate  迫使Vue 实例重新渲染   不建议用   PS：仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

 */