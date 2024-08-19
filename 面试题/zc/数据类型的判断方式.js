// typeof   缺点: null 也是 Object

// instanceof 缺点： 只能判断某对象是否存在于目标对象原型链上

// constructor

// Object.protoType.toString.call()   缺点:不能细分是谁的实例



// instanceof 原理 : 查找目标对象的原型链

function myInstance(L, R) {//L代表instanceof左边，R代表右边
  var RP = R.prototype
  var LP = L.__proto__
  while (true) {
    if (LP == null) {
      return false
    }
    if (LP == RP) {
      return true
    }
    LP = LP.__proto__
  }
}
console.log(myInstance({}, Object));


// 1.__proto__是每个对象都有的一个属性，而prototype是函数才有的属性

// 2.__proto__是当前对象的原型对象（隐式原型），而prototype是当前构造函数的原型对象（显式原型）

// 每个对象的__proto__属性指向自身构造函数的prototype！ 

function GoodFriend() {
  this.name = "三三";
}
var Girl = {
  who: "张三三"
};
GoodFriend.prototype = Girl
var a = new GoodFriend()
a.__proto__ === GoodFriend.prototype

// constructor主要用于记录该对象引用哪个构造函数，他可以让原型对象重新指向原来的构造函数
// 原型对象中的 this 指向实例对象
