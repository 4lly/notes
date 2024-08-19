
//写一个js函数，实现数组扁平化，只减少一级嵌套
//如输入【1，【2，【3】】，4】，输出【1，2，【3】，4】
function flatten (arr) {
  const res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((n) => {
        res.push(n);
        // res.concat(n);
      });
    } else {
      res.push(item);
      //  res.concat(item);
    }
  });
  return res;
}


//功能测试
const arr = [1, [2, [3]], 4];
console.log(flatten(arr));

//如输入【1，【2，【3】】，4】，输出【1，2，【3】，4】
function deepFlatten (arr) {
  const res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      const flatItem = deepFlatten(item);
      flatItem.forEach((n) => {
        res.push(n);
        // res.concat(n);
      });
    } else {
      res.concat(item);
      // res.concat(item);
    }
  });
  return res;
}


//功能测试
const arr1 = [1, [2, [3, [3.5]]], 4];
console.log(deepFlatten(arr1));
