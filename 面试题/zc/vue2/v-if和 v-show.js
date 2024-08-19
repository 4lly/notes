/*  
 *  v-show false 变成 true 不会触发生命周期
    v-if 由false变为true的时候触发组件的beforeCreate、create、beforeMount、mounted钩子，
          由true变为false的时候触发组件的beforeDestory、destoryed方法
 * 
 * 
 *  性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗
 * 
 *  原理：将模板 template转为 ast结构的 js 对象
 *       用 ast得到的 js 对象拼装render 和staticRenderFns函数
 *       render 和staticRenderFns函数被调用后生成虚拟vnode 节点，该节点包含创建dom 所需信息
 *        vm.patch函数通过虚拟dom 算法利用vnode 节点创建真实 dom 节点 
 * 
 *  场景：v-if 比 v-show消耗更大（直接操作 dom节点的增加和删除）
 *      如果要频繁的切换，v-show好，如果运行时条件很少改变，v-if 好
 * 
 * 
 */
