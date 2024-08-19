// js 中的继承方式和优缺点

// 原型继承 
// 把父类的实例作为子类的原型  
// 缺点：子类的实例共享父类构造函数的引用属性  不能传参
var person = {
  friends: ['a', 'b', 'c', 'd']
}

var p1 = Object.create(person)

p1.friends.push('aaa')   //影响到父类了   共享了父类的引用属性


// 组合继承模式 
// 在子函数中运行父函数  但是要利用 call 改变 this 
// 再在子函数prototype 里面 new Father() ,使Father（）原型中的方法也得到继承，最后改变Son 原型中的 constructor
// 缺点：调用了两次父类的构造函数 造成了不必要的消耗，父类方法可以复用 
// 优点 可以传参，不共享父类引用属性
function Father(name) {
  this.name = name
  this.body = ['篮球', '足球', '排球']
}

Father.prototype.getName = function () {
  console.log(this.name)
}

function Son(name, age) {
  Father.call(this, name)
  this.age = age
}
Son.prototype = new Father()
Son.prototype.constructor = Son
var s = new Son('me', 20)

// 寄生组合继承 
function Father(name) {
  this.name = name
  this.hobby = ["篮球", "足球", "乒乓球"]
}

Father.prototype.getName = function () {
  console.log(this.name);
}

function Son(name, age) {
  Father.call(this, name)
  this.age = age
}

Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son

var s2 = new Son("ming", 18)
console.log(s2);

// ex6 extend  寄生组合继承的语法糖 
// 子类只要继承父类 可以不写 constructor ，一旦写了 则在 constructor 中的第一句必须是 super 

class Son3 extends Father {  // // Son.prototype.__proto__ = Father.prototype
  constructor(y) {
    super(200)    // => Father.call(this,200)
    this.y = y
  }
}
