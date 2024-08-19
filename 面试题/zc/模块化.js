/**
 *  为什么要使用模块化?  
 *  防止命名冲突；更好的分离，按需加载；更好的复用性；更高的维护性
 * 
 *  exports 和 module.exports 的区别 ？ 
 *  导出方式不一样 
 *    exports.xxx = ''
 *    module.exports = {}
 *    
 *  exports是module.exports的引用，两个指向的是用一个地址，而require能看到的只有module.export
 * 
 *  js 模块包装格式有哪些 ？ 
 *  commonjs 
 *    同步运行，不适合前端
 *  AMD
 *    异步运行，主要采用异步的方式加载模块，模块的加载不影响后面代码的执行。所有依赖这个模块的语句都写在一个回调函数中，模块加载完毕，再执行回调函数
 *  CMD 
 *    异步运行 ，seajs 规范
 * 
 * 
 *  ES6 和 commonjs 的区别？ 
 *  commonjs 是同步执行的，不适合前端，后端 node js可以使用  
 *  使用方式
 *  module.export  = xxx 
 *  require('xxx')  
 * 
 *  AMD/CMD/UMD/适合前端 异步执行 
 */

// AMD 
define(["a", "b", "c", "d", "e"], function (a, b, c, d, e) {
  // 相当于在前面声明并初始化了要用到的所有模块
  a.dosomething()

  if (false) {
    // 即使没有用到模块 b，也会提前执行
    b.dosomething()
  }
})
// CMD 
define(function (require, exports, module) {
  var a = require("./a") //需要的时候声明
  a.dosomething()
  if (false) {
    var b = require("./b")
    b.dosomething()
  }
})

//ESM 使用 export 、 export default 来导出模块，使用 import 来引入模块

// ESM和 commonjs 的区别 
// commonjs 是运行时加载，ESM 是编译时加载；
//  commonjs 是同步加载，ESM 是异步;
// commonjs 对值是浅拷贝，ESM 是对值的引用，且不可修改

// require 和 import 的区别
// 调用时机 ： require 是运行时调用，所以其实可以放在任何地方
//            import是编译时调用，所以必须放在文件开头
// 使用时： require 需要使用 module.exports  = fs 或者 exports.fs = xxx  ;
//        import用 exports default或exports const xxx
// 解构赋值： require 是赋值的过程  import 是解构的过程            
