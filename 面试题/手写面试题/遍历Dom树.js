
/**
 * 访问节点
 * @param {} n 
 */
function visitNode (n) {
  // 注释
  if (n instanceof Comment) {
    console.log('Comment Node-----', n.textContent);
  }
  // 文本
  if (n instanceof Text) {
    if (n.textContent?.trim()) {
      console.log('Text Node-----', n.textContent);
    }
  }
  if (n instanceof HTMLElement) {
    console.log('Element Node-----', n.tagName.toLowerCase());
  }
};

/**
 * 深度优先
 * @param {} root 
 */
function depthFirstTraverse1 (root) {
  visitNode(root);
  const childNodes = root.childrenNodes();
  if (childNodes.lenght) {
    childNodes.forEach(child => {
      depthFirstTraverse1(child);
    });
  }
}

/**
 * 深度优先 栈实现
 * @param {} root 
 */
function depthFirstTraverse2 (root) {
  const stack = [];
  // 根节点入队列
  stack.unshift(root);
  while (stack.length > 0) {
    const curNode = stack.pop();
    if (curNode == null) break;
    visitNode(curNode);
    const childNodes = curNode.childrenNodes();
    if (childNodes.lenght) {
      Arrry.from(childNodes).reverse().forEach(child => stack.push(child));
    }
  }
}

/**
 * 广度优先
 * @param {} root 
 */
function breadFirstTraverse (root) {
  const queue = [];
  // 根节点入队列
  queue.unshift(root);
  while (queue.length > 0) {
    const curNode = queue.pop();
    if (curNode == null) break;
    visitNode(curNode);
    const childNodes = curNode.childrenNodes();
    if (childNodes.lenght) {
      childNodes.forEach(child => {
        queue.unshift(child);
      });

    }

  }
}