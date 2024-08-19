// 单例模式    不管创建多少对象都只有一个实例
var Single = (function () {
  var instance = null
  function Single(name) {
    this.name = name
  }
  return function (name) {
    if (!instance) {
      instance = new Single(name)
    }
    return instance
  }
})()

var oA = new Single('hi')
var oB = new Single('hello')
console.log(oA);
console.log(oB);
console.log(oB === oA);

// 工厂模式  代替 new 创建一个对象 ，且这个对象像工厂制作一样，批量制作属性相同的实例对象（指向不同）
function Animal(o) {
  var instance = new Object()
  instance.name = o.name
  instance.age = o.age
  instance.getAnimal = function () {
    return "name:" + instance.name + " age:" + instance.age
  }
  return instance
}

var cat = Animal({ name: "cat", age: 3 })
console.log(cat);

// 构造函数模式 

// 发布订阅模式 
// constructor 为了将实例的构造器的原型对象暴露出来, 比如你写了一个插件,
// 别人得到的都是你实例化后的对象, 如果别人想扩展下对象,就可以用 instance.constructor.prototype 去修改或扩展原型对象。
class Watcher {
  // name模拟使用属性的地方
  constructor(name, cb) {
    this.name = name
    this.cb = cb
  }
  update() {//更新
    console.log(this.name + "更新了");
    this.cb() //做出更新回调
  }
}

class Dep {//依赖收集器
  constructor() {
    this.subs = []
  }
  addSubs(watcher) {
    this.subs.push(watcher)
  }
  notify() {//通知每一个观察者做出更新
    this.subs.forEach(w => {
      w.update()
    });
  }
}

// 假如现在用到age的有三个地方
var w1 = new Watcher("我{{age}}了", () => { console.log("更新age"); })
var w2 = new Watcher("v-model:age", () => { console.log("更新age"); })
var w3 = new Watcher("I am {{age}} years old", () => { console.log("更新age"); })

var dep = new Dep()
dep.addSubs(w1)
dep.addSubs(w2)
dep.addSubs(w3)


// 在Object.defineProperty 中的 set中运行
dep.notify()

// 代理模式  

// 迭代器模式