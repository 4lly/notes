
/**
 * 前置知识：js的with语法,可改变{}内自由变量的查找方式，当作obj属性来找，找不到会报错，
 * vue-template-complier将模版编译为render函数
 * 执行render函数生成vnode
 * 
 * 1、编译模版
 * 模版不是html，有指令，插值，js表达式，能实现判断、循环
 * html是标签语言，只有js才能实现判断，循环
 * 因此模版一定是转成某种js代码，即模版编译
 * 
 * 2、编译过程
 * 模板编译为render函数、执行render函数返回vnode、基于vnode在执行patch和diff
 * render方法 可代替 template
 * 
 */