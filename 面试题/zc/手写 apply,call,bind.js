//call

Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Not a Function')
  }

  context = context || window

  context.fn = this

  let args = Array.from(arguments).slice(1)

  let result = context.fn(...args)

  delete context.fn

  return result
}

// apply 

Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Not a Function')
  }
  let result

  context = context || window

  context.fn = this

  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn

  return result
}


// 函数柯里化就是我们给一个函数传入一部分参数，此时就会返回一个函数来接收剩余的参数

// bind    没看懂

Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Not a Function')
  }

  const _this = this

  const args = Array.prototype.slice.call(arguments, 1)

  return function F() {
    // 判断是不是 new 出来的
    if (this instanceof F) {
      //是  返回一个空对象，且使创建出来的实例的__proto__指向_this的 prototype，且完成函数柯里化 
      return new _this(...args, ...arguments)
    } else {
      // 不是 new 出来改变 this 指向 完成函数柯里化 
      return _this.apply(context, args.concat(...arguments))
    }
  }
}