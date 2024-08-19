/*
 * @Author: cris
 * @Date: 2023-08-05 16:54:58
 * @LastEditors: cris
 * @LastEditTime: 2023-08-05 17:36:02
 * @FilePath: /面试题/八股文/手写数组转为树，树转为数组.js
 * @Description: ,
 * 
 */

function ArrayToTree (arr = []) {
  //遍历查找太慢 使用map
  // 用于id和treeNode的映射
  const idToTreeNode = new Map();
  let root = null;
  arr.forEach((item) => {
    const { id, name, parentId } = item;
    // 定义tree node 并加入map
    const treeNode = { id, name };
    idToTreeNode.set(id, treeNode);
    // 找到parentNode并加入到他的children
    const parentNode = idToTreeNode.get(parentId);
    if (parentNode) {
      if (parentNode.children == null) parentNode.children = [];
      parentNode.children.push(treeNode);
    }
    // 找到根节点
    if (parentId === 0) root = treeNode;


  });
  return root;
}

// 看是深度优先还是广度优先
function TreeToArray (root) {
  // 用于id和treeNode的映射
  //遍历树查找太慢 使用map 
  const nodeToParent = new Map();
  const arr = [];
  // 广度优先遍历 使用队列 queue
  const queue = [];
  queue.unshift(root);//根节点入队
  while (queue.length > 0) {
    const curNode = queue.pop(); //出队
    if (curNode == null) break;
    const { id, name, children = [] } = curNode;
    // 创建数组item，并push
    const parentNode = nodeToParent.get(curNode);
    const parentId = parentNode?.id || 0;
    const item = { id, name, parentId };
    arr.push(item);
    // 自节点入队
    children.forEach(child => {
      // 映射父节点
      nodeToParent.set(child, curNode);
      // 入队
      queue.unshift(child);

    });

  }


  return arr;
}
const arr = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },

];

const tree = ArrayToTree(arr);
// console.log(tree, JSON.stringify(tree));
const res = TreeToArray(JSON.parse(JSON.stringify(tree)));
console.log(res);