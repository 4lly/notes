// 冒泡排序
function bubbleSort (arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    // 从第一个元素开始、比较相邻的两个元素、前者大就交换位置
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num;
      }
    }
  }
  return arr;
}
// 快速排序
function quickSort (arr = []) {
  const length = arr.length;
  if (length === 0) return arr;
  const midIndex = Math.floor(length / 2);
  const midvalue = arr.splice(midIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n < midvalue) {
      left.push(n);
    } else {
      right.push(n);
    }
  }
  return quickSort(left).concat([midvalue]).concat(quickSort(right));
}

function quickSort2 (arr = []) {
  const length = arr.length;
  if (length === 0) return arr;
  const midIndex = Math.floor(length / 2);
  const midvalue = arr.slice(midIndex, midIndex + 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < length; i++) {
    const n = arr[i];
    if (i !== midIndex) {
      if (n < midvalue) {
        left.push(n);
      } else {
        right.push(n);
      }
    }
  }
  return quickSort2(left).concat([midvalue]).concat(quickSort2(right));
}

// 测试
let arr = [3, 5, 1, 7, 2, 0];
console.log(bubbleSort(arr));