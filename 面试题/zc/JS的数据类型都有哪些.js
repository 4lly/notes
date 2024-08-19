// 基本数据类型
// Number String Boolean null Undefined Symbol BigInt

// Symbol 的实例是唯一不可变的，用于确保对象的属性不重复
// Symbol.for 创建一个全局符号 
// Symbol.keyFor 查看全局符号 参数是全局符号，返回符号描述 
// 还有一些Symbol内置的工厂函数 
const b = Symbol.for('b123')
console.log(Symbol.keyFor(b))  // b123

//yield
function* aaa() {
  var b = [3, 5, 7];
  for (var i = 0; i < b.length; i++) { yield b[i] }
}
var myArr = aaa()
console.log(myArr.next(aaa())) // {value: 3, done: false}
myArr.next() // {value: 5, done: false}
myArr.next() //{value: 7, done: false}
myArr.next() //{value: undefined, done: false}

// BigInt
// js的数字类型是按照IEEE 754-2008标准的定义，所有数字都以双精度 64 位浮点格式表示，在此标准的情况下，无法
// 精确表示非常大的整数讲四舍五入，
// BigInt 用于表示大于 js数据类型支持范围的数据
BigInt("10");    //10n

// 引用数据类型
// 统称 Object
// Object Array Function Date RegExp


// 基本数据类型储存在栈中，引用数据类型储存在堆中，在栈中保存数据的引用地址，这个地址指向对应的数据，以便快速查找堆内存中的对象
// 栈内存是自动分配，堆内存是动态分配，不会自动释放，所以每次使用完对象后设置成 null，减少无用的内存消耗




