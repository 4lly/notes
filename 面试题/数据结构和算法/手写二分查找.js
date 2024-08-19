/*
 * @Author: cris
 * @Date: 2023-07-31 13:12:02
 * @LastEditors: cris
 * @LastEditTime: 2023-08-07 10:32:41
 * @FilePath: /面试题/手写面试题/手写二分查找.js
 * @Description:
 *
 */
// 循环
function binarySearch (arr, target) {
  const length = arr.length;
  if (length === 0) return -1;
  let startIndex = 0; // 开始位置
  let endIndex = length - 1;// 结束位置
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];

    if (target < midValue) {
      // 目标值较小，则继续在左侧查找
      endIndex = midIndex - 1;

    } else if (target > midValue) {
      // 目标值较大，则继续在右侧查找
      startIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }

  return -1;


}
// 递归
function binarySearch1 (arr, target, startIndex, endIndex) {
  const length = arr.length;
  if (length === 0) return -1;
  startIndex = startIndex == null ? 0 : startIndex; // 开始位置
  endIndex = endIndex == null ? length - 1 : endIndex; // 结束位置
  // 如果start和end相遇 则结束
  if (startIndex === endIndex) {
    return -1;
  }
  // 中间位置
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const midValue = arr[midIndex];


  if (target < midValue) {
    // 目标值较小，则继续在左侧查找
    return binarySearch1(arr, target, startIndex, midIndex - 1);


  } else if (target > midValue) {
    // 目标值较大，则继续在右侧查找
    return binarySearch1(arr, target, midIndex + 1, endIndex);
  } else {
    return midIndex;
  }


}
//测试
const arr = [10, 20, 30, 40, 50, 60];
const target = 200;
console.log(binarySearch(arr, target));