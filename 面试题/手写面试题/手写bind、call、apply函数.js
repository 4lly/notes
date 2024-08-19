/*
 * @Author: cris
 * @Date: 2023-07-31 13:11:23
 * @LastEditors: cris
 * @LastEditTime: 2023-08-04 12:50:44
 * @FilePath: /面试题/手写面试题/手写bind、call、apply函数.js
 * @Description:  
 * 
 */
Function.prototype.myBind = function () {
  // 将参数解析为数组
  const args = Array.prototype.slice.call(arguments);
  // 获取this（取出第一项，数组剩余的就是传递的参数）
  const t = args.shift();
  const self = this; // 当前函数
  // 返回一个函数
  return function () {
    // 执行原函数，并返回结果
    return self.apply(t, args);
  };

};
Function.prototype.myCall = function (context, ...args) {
  if (context == null) context = globalThis;
  if (typeof context !== 'object') context = new Object(context); // 值类型 变引用类型
  const fnKey = Symbol();// 不会出现属性名称的覆盖
  context[fnKey] = this; // this 就是当前的函数
  const res = context[fnKey](...args);// 绑定了this
  delete context[fnKey]; // 清理掉fn，防止污染
  return res;
};

Function.prototype.myApply = function (context, args = []) {
  if (context == null) context = globalThis;
  if (typeof context !== 'object') context = new Object(context); // 值类型 变引用类型
  const fnKey = Symbol();// 不会出现属性名称的覆盖
  context[fnKey] = this; // this 就是当前的函数
  const res = context[fnKey](...args);// 绑定了this
  delete context[fnKey]; // 清理掉fn，防止污染
  return res;
};


// 功能测试
const fn = myBind({ name: 'lly' }, 10, 20);
const res = fn();
console.log(res);