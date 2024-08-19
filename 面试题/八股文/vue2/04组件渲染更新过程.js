/*/
 * @Author: cris
 * @Date: 2023-08-01 12:30:40
 * @LastEditors: cris
 * @LastEditTime: 2023-08-03 02:06:51
 * @FilePath: /面试题/八股文/vue2/04组件渲染更新过程.js
 * @Description: 
 * 
 */

/**
 * 响应式：监听data属性getter、setter
 * 模版编译：模板到render函数、再到vnode
 * vdom：patch（ele，vnode） 和 patch（vnode，newVnode）
 * 
 * 1、初次渲染过程
 * 解析模版为render函数（或在开发环境已完成，vue-loader）
 * 触发响应式，监听data属性 getter、setter
 * 执行render函数，生成vnode，patch（ele，vnode）
 * 
 * 2、更新过程
 * 修改data，触发setter
 * 重新执行render函数，生newVnode
 * patch（vnode，newVnode）
 * 
 * 3、异步渲染
 * 回顾$nextTick在dom更新后触发回调，汇总data修改，一次性更新视图，减少dom操作次数，提高性能
 * 
 */