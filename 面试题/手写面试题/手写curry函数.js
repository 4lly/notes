function curry (fn) {
  const fnArgsLenght = fn.length;
  let args = [];
  function calc (...newArgs) {
    console.log(newArgs);
    args = [...args, ...newArgs];
    if (args.length < fnArgsLenght) {
      // 参数长度不够，返回函数
      return calc;
    } else {
      // 参数够了
      return fn.apply(this, args.slice(0, fnArgsLenght));
    }
  }
  return calc;
}


function add (a, b, c) {
  return a + b + c;
}


const curryAdd = curry(add);
const res = curryAdd(10)(20)(30);
console.log(res);