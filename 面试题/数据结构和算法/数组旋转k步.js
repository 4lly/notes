/*
 * @Author: cris
 * @Date: 2023-08-05 17:42:21
 * @LastEditors: cris
 * @LastEditTime: 2023-08-05 18:01:20
 * @FilePath: /面试题/数据结构和算法/数组旋转k步.js
 * @Description: 
 * 
 */
// 数组旋转k步 优先考虑时间复杂度
function rotate1 (arr = [], k) {
  const len = arr.length;
  if (!k || len === 0) return arr;
  const step = Math.abs(k % len);// 取绝对值
  //时间复杂度O(n^2)，空间复杂度O(1)
  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n !== null) {
      arr.unshift(n);
    }
  }
  return arr;
}

function rotate2 (arr = [], k) {
  const len = arr.length;
  if (!k || len === 0) return arr;
  const step = Math.abs(k % len);// 取绝对值
  //时间复杂度O(1)，空间复杂度O(n)
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, len - step);
  return part1.concat(part2);
}

// 功能测试
const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotate2(arr, 3));

// 性能测试
const arr1 = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr1.push(i);
}


console.time('rotate1');
rotate1(arr1, 9 * 10000);
console.timeEnd('rotate1');

const arr2 = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr2.push(i);
}
console.time('rotate2');
rotate2(arr2, 9 * 10000);
console.timeEnd('rotate2');