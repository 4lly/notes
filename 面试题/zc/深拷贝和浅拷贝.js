// ----------------------------------------------浅拷贝
// 只是把对象的属性和属性值拷贝到另一个对象中
var obj1 = {
  a: {
    a1: { a2: 1 },
    a10: { a11: 123, a111: { a1111: 123123 } }
  },
  b: 123,
  c: "123"
}
// 方式1
function shallowClone1(o) {
  let obj = {}

  for (let i in o) {
    obj[i] = o[i]
  }
  return obj
}

// 方式2
var shallowObj2 = { ...obj1 }

// 方式3
var shallowObj3 = Object.assign({}, obj1)

let shallowObj = shallowClone1(obj1);

shallowObj.a.a1 = 999
shallowObj.b = true

console.log(obj1);  //第一层的没有被改变，一层以下就被改变了



// ----------------------------------------------深拷贝

// 简易版  
function deepClone(o) {
  let obj = {}
  for (var i in o) {
    // if(o.hasOwnProperty(i)){
    if (typeof o[i] === "object") {
      obj[i] = deepClone(o[i])
    } else {
      obj[i] = o[i]
    }
    // }
  }
  return obj
}


var myObj = {
  a: {
    a1: { a2: 1 },
    a10: { a11: 123, a111: { a1111: 123123 } }
  },
  b: 123,
  c: "123"
}

var deepObj1 = deepClone(myObj)
deepObj1.a.a1 = 999
deepObj1.b = false
console.log(myObj);



// 简易版存在的问题：参数没有做检验，传入的可能是 Array、null、regExp、Date
function deepClone2(o) {
  if (Object.prototype.toString.call(o) === "[object Object]") {  //检测是否为对象
    let obj = {}
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        if (typeof o[i] === "object") {
          obj[i] = deepClone(o[i])
        } else {
          obj[i] = o[i]
        }
      }
    }
    return obj
  } else {
    return o
  }
}

function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]" || Object.prototype.toString.call(o) === "[object Array]"
}

// 继续升级，没有考虑到数组，以及ES6中的map、set、weakset、weakmap
function deepClone3(o) {
  if (isObject(o)) {//检测是否为对象或者数组
    let obj = Array.isArray(o) ? [] : {}
    for (let i in o) {
      if (isObject(o[i])) {
        obj[i] = deepClone(o[i])
      } else {
        obj[i] = o[i]
      }
    }
    return obj
  } else {
    return o
  }
}


// 有可能碰到循环引用问题  var a = {}; a.a = a; clone(a);//会造成一个死循环
// 循环检测
// 继续升级
function deepClone4(o, hash = new map()) {
  if (!isObject(o)) return o//检测是否为对象或者数组
  if (hash.has(o)) return hash.get(o)
  let obj = Array.isArray(o) ? [] : {}

  hash.set(o, obj)
  for (let i in o) {
    if (isObject(o[i])) {
      obj[i] = deepClone4(o[i], hash)
    } else {
      obj[i] = o[i]
    }
  }
  return obj
}

// 递归易出现爆栈问题
//  将递归改为循环，就不会出现爆栈问题了
var a1 = { a: 1, b: 2, c: { c1: 3, c2: { c21: 4, c22: 5 } }, d: 'asd' };
var b1 = { b: { c: { d: 1 } } }
function cloneLoop(x) {
  const root = {};
  // 栈 
  const loopList = [  //->[]->[{parent:{a:1,b:2},key:c,data:{ c1: 3, c2: { c21: 4, c22: 5 } }}]
    {
      parent: root,
      key: undefined,
      data: x,
    }
  ];
  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent; //{} //{a:1,b:2}
    const key = node.key; //undefined //c
    const data = node.data; //{ a: 1, b: 2, c: { c1: 3, c2: { c21: 4, c22: 5 } }, d: 'asd' }  //{ c1: 3, c2: { c21: 4, c22: 5 } }}
    // 初始化赋值目标，key 为 undefined 则拷贝到父元素，否则拷贝到子元素
    let res = parent; //{}->{a:1,b:2,d:'asd'} //{a:1,b:2}->{}
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环 
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          })
        } else {
          res[k] = data[k];
        }
      }
    }
  }
  return root
}


function deepClone5(o) {
  let result = {}
  let loopList = [
    {
      parent: result,
      key: undefined,
      data: o
    }
  ]

  while (loopList.length) {
    let node = loopList.pop()
    let { parent, key, data } = node
    let anoPar = parent
    if (typeof key !== 'undefined') {
      anoPar = parent[key] = {}
    }

    for (let i in data) {
      if (typeof data[i] === 'object') {
        loopList.push({
          parent: anoPar,
          key: i,
          data: data[i]
        })
      } else {
        anoPar[i] = data[i]
      }
    }
  }
  return result
}


let cloneA1 = deepClone5(a1)
cloneA1.c.c2.c22 = 5555555
console.log(a1);
console.log(cloneA1);


// ------------------------------------------JSON.stringify()实现深拷贝

function cloneJson(o) {
  return JSON.parse(JSON.stringify(o))
}

    // let obj = { a: { c: 1 }, b: {} };
    // obj.b = obj;
    // console.log(JSON.parse(JSON.stringify(obj))) // 报错 // Converting circular structure to JSON


