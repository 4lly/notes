/*
 * @Author: cris
 * @Date: 2023-08-07 12:32:08
 * @LastEditors: cris
 * @LastEditTime: 2023-08-07 13:38:43
 * @FilePath: /面试题/数据结构和算法/算法题.js
 * @Description:
 *
 */
// 斐波那契数列 递归
function fibonacci (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n + 1);
}

// 斐波那契数列 循环
function fibonacci (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let n1 = 1; // n-1的值
  let n2 = 0;// n-2的值
  let res = 0;

  for (let i = 0; i < n; i++) {
    res = n1 + n2;
    // 记录中间结果
    n2 = n1;
    n1 = res;
  }
  return res;
}


// 将数组中的0移动到末尾  循环
function moveZero (arr) {
  const length = arr.length;
  if (length === 0) return;
  let zeroLength = 0;
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--;//数组截取了一个元素，i要递减，否则连续0会报错
      zeroLength++; //累加0的长度
    }
  }
  return arr;

}

// 将数组中的0移动到末尾  双指针
function moveZero1 (arr) {
  const length = arr.length;
  if (length === 0) return;
  let i = arr[0];
  let j = -1;//指向第一个0
  let zeroLength = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) { //第一个0
      if (j < 0) {
        j == i;
      }
    }

    if (i !== 0 && j >= 0) {
      const n = arr[i];
      arr[i] = arr[j];
      arr[j] = n;
      j++;

    }
  }
  return arr;

}

// 测试 
const arr = [1, 0, 3, 4, 0, 0, 11, 0];
// console.log(moveZero(arr));


// 字符串中连续最多的字符，以及次数  循环

function findCountinuousChar (str) {
  const res = {
    char: '',
    length: 0
  };

  const length = str.length;
  if (length === 0) return res;

  let tempLength = 0;// 临时记录当前连续字符长度

  for (let i = 0; i < length; i++) {
    tempLength = 0;//重置
    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        tempLength++;
      }
      if (str[i] !== str[j] || j === length - 1) {
        // 不相等，或者已经到了最后一个元素，要去判断最大值
        if (tempLength > res.length) {
          res.char = str[i];
          res.length = tempLength;

        }

        if (i < length - 1) {
          i = j - 1;// 跳步 
        }
        break;
      }


    }
  }

  return res;

}


// 字符串中连续最多的字符，以及次数  双指针
function findCountinuousChar1 (str) {
  const res = {
    char: '',
    length: 0
  };

  const length = str.length;
  if (length === 0) return res;

  let tempLength = 0;// 临时记录当前连续字符长度
  let i = 0;
  let j = 0;

  for (; i < length; i++) {
    if (str[i] === str[j]) {
      tempLength++;
    }

    if (str[i] !== str[j] || i === length - 1) {
      // 不相等，或者已经到了最后一个元素，要去判断最大值
      if (tempLength > res.length) {
        res.char = str[j];
        res.length = tempLength;
      }
      tempLength = 0;

      if (i < length - 1) {
        j = i;// 让j追上i
        i--;
      }
    }


  }

  return res;

}

//测试
const str = 'abbcccddeeee1234';
console.log(findCountinuousChar(str));


// 求对称数 1、使用数组反转、比较

function findPalindromeNumbers (max) {
  const res = [];
  if (max < 0) return res;
  for (let i = 0; i <= max; i++) {
    const s = i.toString();
    if (s === s.split('').reverse.join('')) {
      res.push(i);
    }

  }
  return res;

}

// 求对称数 字符串头尾比较 
function findPalindromeNumbers1 (max) {
  const res = [];
  if (max < 0) return res;
  for (let i = 0; i <= max; i++) {
    const s = i.toString();
    const length = s.length;


    let flag = true;
    let startIndex = 0;
    let endIndex = length - 1;
    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        flag = false;
        break;
      } else {
        startIndex++;
        endIndex--;
      }

    }
    if (flag) res.push(i);

  }
  return res;

}

// 求对称数 生成反转数
function findPalindromeNumbers3 (max) {
  const res = [];
  if (max < 0) return res;
  for (let i = 0; i <= max; i++) {
    let n = i;
    let rev = 0;
    // i :123
    // n:123

    while (startIndex < endIndex) {
      rev = rev * 10 + n % 10; // rev:321
      n = Math.floor(n / 10);// n:123

    }
    if (i === rev) res.push(i);

  }
  return res;

}


// 数字千分位格式化 数组

function format1 (n) {
  n = Math.floor(n);
  const s = n.toString();
  const arr = s.split('').reverse();
  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return val + ',' + prev;
      } else {
        return val;
      }

    } else {
      return val + prev;
    }
  }, '');
}

// 数字千分位格式化 字符串

function format2 (n) {
  n = Math.floor(n);
  const s = n.toString();
  const length = s.length;

  let res = '';
  for (let i = length - 1; i >= 0; i--) {
    const j = length - i;
    if (j % 3 === 0) {
      if (i === 0) {
        res = s[i] + res;
      } else {
        res = '，' + s[i] + res;
      }
    } else {
      res = s[i] + res;
    }
  }
  return res;
}