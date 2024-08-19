/*
 * @Author: cris
 * @Date: 2023-08-05 18:02:51
 * @LastEditors: cris
 * @LastEditTime: 2023-08-07 12:30:30
 * @FilePath: /面试题/数据结构和算法/栈、队列、链表、堆.js
 * @Description:
 *
 */
// 数据结构 分为逻辑结构和物理结构
// 数组,链表是物理结构，真实的功能实现，受限于编程语言
// 栈是逻辑结构，理论模型，不管如何实现，不受任何语言限制

//栈：数据往下叠加 先进后出， 功能 push pop length 可用数组实现
const stack = [];
stack.push(100);//入栈
stack.push(200);
stack.push(300);
const num = stack.pop();//出栈
stack.length;

// 队列 先进先出  功能 add delete length 可用数组或者链表实现

const queue = [];
queue.push(100);//入队
queue.push(200);
queue.push(300);
const num1 = queue.shift();//出队
queue.length;


class myQueue {
  stack1 = [];
  stack2 = [];
  add (n) {
    this.stack1.push(n);

  }
  delete () {
    let res;
    const stack1 = this.stack1;
    const stack2 = this.stack2;
    // 将stack1所有元素移动到stack2中
    while (stack1.length) {
      const n = stack1.pop();
      if (n !== null) {
        stack2.push(n);
      }
    }
    // 将stack2 pop()
    res = stack2.pop();
    // 将stack2所有元素移动到stack1中
    while (stack2.length) {
      const n = stack2.pop();
      if (n !== null) {
        stack1.push(n);
      }
    }
    return res || null;

  }
  get length () {
    return this.stack1.length;
  }
}

// 功能测试
const q = new myQueue();
q.add(1);
q.add(2);
q.add(3);
console.log(q.length);
console.log(q.delete());
console.log(q.length);


// 链表 是一种物理结构，类似数组，数组需要一段连续的内存空间，而链表是零散的，链表节点的数据结构{value,next?,prev?}
// 链表和数组的区别？
// 都是有序结构
// 链表：查询慢O(n) ，新增和删除快O(1)
// 数组：查询快O(1) ，新增和删除慢O(n)

// 链表和数组 哪个实现队列更快？
// 数组是连续存储，push很快，shift很慢，
// 链表是非连续存储，add和delete都很快，但查找很慢，
// 结论：链表实现队列快

// const n1 = {
//   value: 100,
//   next: n2
// };
// const n2 = {
//   value: 200,
//   next: n3,
//   prev: n1
// };
// const n3 = {
//   value: 300,
//   next: n4,
//   prev: n2
// };
// const n4 = {
//   value: 400,
//   prev: n3
// };

// 根据数组创建单向链表
function createLinkList (arr) {
  const length = arr.length;
  if (length === 0) throw new Error('arr is empty');
  let curNode = {
    value: arr[length - 1]
  };
  if (length === 1) return curNode;
  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    };
  }
  return curNode;
}
// 反转单向链表
function reverseLinkList (listNode) {
  // 定义三个指针
  let prevNode = undefined;
  let curNode = undefined;
  let nextNode = undefined;
  // 以nextNode为主，遍历链表
  while (nextNode) {
    // 第一个元素删掉next，防止循环引用
    if (curNode && !prevNode) {
      delete curNode.next;
    }
    // 反转指针
    if (curNode && prevNode) {
      curNode.next = prevNode;
    }
    // 整体向后移动指针
    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode?.next;
  }
  // 最后一个的补充
  curNode.next = prevNode;
  return curNode;
}
// 测试
const arr = [100, 200, 300, 400];
const list = createLinkList(arr);
console.log(list);


// 链表实现队列？
// 单向链表，但要同时记录head和tail
// 要从tail入队，从head出队，否额出队时tail不好定位
// length要实时记录，不可遍历链表获取

class myQueue {
  head = null;
  tail = null;
  length = 0;
  //入队 在tail位置
  add (n) {
    const newNode = {
      value: n,
      next: null
    };
    // 处理head
    if (this.head == numll) {
      this.head = newNode;

    }
    // 处理tail
    const tailNode = this.tail;
    if (tailNode.next) {
      tailNode.next = newNode;
    }

    this.tail = newNode;

    // 记录长度
    this.length++;
  }
  //入队 在head位置
  delete () {
    const headNode = this.head;
    if (this.headNode === null) return null;
    if (this.length <= 0) return null;
    // 取值
    const value = headNode.value;
    //  处理head
    this.head = headNode.next;
    // 记录长度
    this.length--;
    return value;

  }
  get length () {
    return this.length;
  }
}

// 凡有序 必二分 优化嵌套循环 可以考虑双指针

// 堆  数据往上叠加