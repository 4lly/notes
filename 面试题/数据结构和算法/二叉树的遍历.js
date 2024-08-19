/*
 * @Author: cris
 * @Date: 2023-08-07 12:16:56
 * @LastEditors: cris
 * @LastEditTime: 2023-08-07 12:29:13
 * @FilePath: /面试题/数据结构和算法/二叉树.js
 * @Description:
 *
 */


// 二叉树的遍历
// 前序遍历：root=>left=>right
const arr = [];
function preOrderTraverse (node) {
  if (node == null) return;
  // console.log(node.value);
  arr.push(node.value);
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
}
// 中序遍历：left=>root=>right
function inOrderTraverse (node) {
  if (node == null) return;
  inOrderTraverse(node.left);
  // console.log(node.value);
  arr.push(node.value);
  inOrderTraverse(node.right);
}
// 后序遍历：left=>right=>root
function postOrderTraverse (node) {
  if (node == null) return;
  postOrderTraverse(node.left);
  postOrderTraverse(node.right);
  // console.log(node.value);
  arr.push(node.value);
}

// 测试
const tree = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
};

//求一个二叉树的第k小值


function getKthValue (node, k) {
  inOrderTraverse(node);
  return arr[k - 1] || null;
}