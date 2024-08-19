
/**
 * 
 * @param {*} x 
 * @returns 
 */

function getType (x) {
  // 使用Object.prototype.toString.call(params)
  const originType = Object.prototype.toString.call(x);
  const spaceIndex = originType.indexOf(' ');
  const type = originType.slice(spaceIndex + 1, -1);
  return type.toLowerCase();

}


//功能测试
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(100));
console.log(getType('abc'));
console.log(getType(true));
console.log(getType(Symbol()));
console.log(getType({}));
console.log(getType([]));
console.log(getType(() => { }));
console.log(getType(new Map()));
console.log(getType(new WeakMap()));
console.log(getType(new Set()));
console.log(getType(new WeakSet()));
console.log(getType(new Date()));
console.log(getType(new RegExp()));
console.log(getType(new Error()));
console.log(getType(Promise.resolve()));





