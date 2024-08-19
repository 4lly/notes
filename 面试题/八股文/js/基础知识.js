
/**
 * 1、值类型 和 引用类型 的区别？
 * 值类型存储在栈，引用类型存储在堆 ，栈从上往下排列，堆从下往上排列
 * 值类型：string、 number 、boolean、 undefined 、symbol
 * 引用类型：null、object、array、函数
 * 
 * 2、typeof 运算符
 * 可识别所有的值类型、识别函数、判断是否是引用类型（不可再细分）
 * 
 * 3、== 运算符
 *  除了 == null 之外其他的一律用 ===
 * if（obj.a == null) {} 相当于  if（obj.a === null || obj.a === undefined ) {} 
 * 
 * 4、if 语句和逻辑运算 
 * truly变量： !!a === true 的变量
 * falsely变量： !!a === false 的变量
 * 
 * 5、原型关系 以及 运行的执行法则
 * 分为显示原型和隐式原型，每个class都有显示原型prototype， 每个实例都有隐式原型__proto__ 
 * 实例的 __proto__ 指向对应class 的 prototype
 * 获取对象属性或方法时，先在自身属性和方法寻找、如找不到则去__proto__中寻找
 * 
 *  6、作用域
 * 全局作用域 函数作用域 块级作用域
 * 
 * 7、什么是自由变量？
 * 一个变量在当前作用域没有定义，但被使用了
 * 向上级作用域，一层一层一次查找，直到找到为止
 * 如果在全局作用域都没找到，则报错xx is not defined
 * 
 * 8、闭包
 * 函数作为返回值 
 * function create () {
 * let a = 100;
 * return function () {
 *   console.log(a);
 * };
 * }
 * let fn = create();
 * let a = 200;
 * fn();
 * 函数作为参数
 * function print (fn) {
 * let a = 200;
 * fn();
 * };
 * let a = 100;
 * function fn () {
 * console.log(a);
 * }
 * print(fn);
 * 
 * 
 * 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不实在执行的地方！！
 * 
 * 9、闭包作用？
 * 隐藏数据
 * cache数据
 * 
 * 10、DOM操作 vue和react框架封装了dom操作
 * attribute（修改html属性，会改变html结构）: p.style.width, p.className, p.nodeName, p.nodeType
 * property（修改对象属性，不会体现到html结构中）: p.steAttribute('date-name','x') 两者都有可能引起Dom渲染
 * 获取dom节点: getElementById, getElementsByClassName, getElementsByTagName, querySelectorAll
 * 新增：createElement 移动/新增节点：appendChild  获取子元素列表：childNodes 删除节点：fo.removeChild(node)
 * 
 * 11、优化Dom操作
 * 缓存Dom查询结果
 * 创建代码片段 将频繁的操作改为一次性操作 createDocumentFragment
 */

