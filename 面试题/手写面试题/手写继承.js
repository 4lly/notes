// es5 寄生组合继承
function Parent (name) {
  this.naem = name;
}

Parent.prototype.eat = function () {
  console.log(`${this.name} is eat`);
};
function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// es6继承
class Parent {
  constructor(name) {
    this.name = name;
  }
  eat () {
    console.log('eat');
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

// 功能测试
let xm = new Child('lly', 20);
console.log(xm.name, xm.age);
xm.eat();