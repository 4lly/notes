/*
 * @Author: cris
 * @Date: 2023-08-07 10:45:36
 * @LastEditors: cris
 * @LastEditTime: 2023-08-07 12:15:59
 * @FilePath: /面试题/手写面试题/双指针.js
 * @Description:
 *
 */

// 两数之和 嵌套循环
function findTowNumber (arr, n) {
  const res = [];
  const length = arr.length;
  if (length === 0) return res;
  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i];
    let flag = false; //是否得到了结果
    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j];
      if (n1 + n2 === n) {
        res.push(n1);
        res.push(n2);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return res;
}


// 两数之和 双指针
function findTowNumber1 (arr, n) {
  const res = [];
  const length = arr.length;
  if (length === 0) return res;
  let i = 0;
  let j = length - 1;
  while (i < j) {
    const n1 = arr[i];
    const n2 = arr[j];
    const sum = n1 + n2;
    if (sum > n) {
      // sum 大于n 则j要向前移动
      j--;
    } else if (sum < n) {
      // sum 小于n 则i要向后移动
      i++;
    } else {
      res.push(n1);
      res.push(n2);
      break;
    }

  }
  return res;
}


