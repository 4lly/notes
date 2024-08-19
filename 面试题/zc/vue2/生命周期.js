/**
 *  beforeCreate
 *  创建之前，还没 data 和 method
 *  
 *  created
 *  创建完成，此时 data 和 method可以使用了
 *  在 created之后beforeMount 之前如果没有 el 选项的话生命周期至此结束，停止编译，如果有则继续
 * 
 *  beforeMount
 *  在渲染之前
 * 
 *  mounted
 *  页面已经渲染完成，并且 vm实例中已经添加完$el了，已经替换掉那些 dom元素了（双括号）中的变量，这个时候可以操作dom 了
 *  （但是获取不了元素的高度等属性，如果想要获取，需要使用 nextTick）
 * 
 *  boforeUpdate
 *  data 改变后，对应的组件重新渲染之前
 * 
 *  updated
 *  data改变后，对应的组件重新渲染完成
 * 
 *  beforeDestory
 *  在实例销毁之前，此时实例仍然可以使用
 * 
 *  destoryed
 *  实例销毁后
 *  
 */