
function deepClone (obj, map = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (map.get(obj)) return map.get(obj);
  let target = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  map.set(obj, target);
  // map
  if (obj instanceof Map) {
    target = new Map();
    obj.forEach((v, k) => {
      const v1 = deepClone(v, map);
      const k1 = deepClone(k, map);
      target.set(k1, v1);
    });
  } else if (obj instanceof Set) {
    //set
    target = new Set();
    obj.forEach((v) => {
      const v1 = deepClone(v, map);
      target.add(v1);
    });
  } else {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 实现一个递归拷贝
        target[key] = deepClone(obj[key], map);
      }
    }
  } hy;
  return target;
}
// 功能测试
let obj = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
};

const obj2 = deepClone(obj);
console.log(obj, obj2);