/*
 * @Author: cris
 * @Date: 2023-08-05 15:47:34
 * @LastEditors: cris
 * @LastEditTime: 2023-08-05 16:06:58
 * @FilePath: /面试题/八股文/设计模式.js
 * @Description: 
 * 
 */
/**
 * 设计模式思想
 * 开放封闭原则
 * 对扩展开放，对修改封闭
 * 
 * 
 * 1、工厂模式
 * 来创建实例，隐藏new，如jq的$,react的createElement
 * class Foo(){
 * }
 * function factory(){
 *    return new Foo()
 * }
 * 
 * 2、单例模式
 * 全局唯一的实例，如vuex、redux的store，全局唯一的dialog，modal
 * 
 * class Sinle(){
 *    private instance=null
 *    private constructor(){}
 *    getInstance(){
 *        if(!this.instance){
 *            this.instance = new Foo()
 *        }
 *        return this.instance
 *    }
 * }
 * 
 * 3、代理模式
 * 使用者不能直接访问对象，而是反问一个代理层，在代理层可以监听get、set做很多事情，如es6 proxy 实现Vue3响应式
 * 
 * 4、观察者模式
 * 一个主体、一个观察者、主体变化之后触发观察者执行
 * btn.addEventListener('click',()=>{...})
 * 
 * 5、发布订阅
 * 
 * 事件总线
 * 
 * 6、装饰器模式
 * 原功能不变、增加一些新功能（aop面向切面编程），如es6和ts的装饰器语法
 * 
 * 7、观察者和发布订阅的区别
 * 观察者：主体和观察者直接绑定，没有中间媒介
 * 发布订阅：主体和观察者互不认识，需要中间媒介
 * 

 * 
 */