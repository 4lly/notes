/*
 * @Author: cirs
 * @Date: 2024-09-12 18:13:27
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 18:23:05
 * @FilePath: /vue3-auth/src/utils/generateMenuTree.ts
 * @Description:
 *
 */
const generateMenuTree = (list) => {
  // 先把所有的菜单放在一个map里面，key是菜单的id，值是菜单浅刻龙出来的对象
  const map = list.reduce((prev, current) => {
    const temp = { ...current };
    prev[temp.id] = temp;
    return prev;
  }, {});
  const tree = [];
  list.forEach((item) => {
    const temp = map[item.id]; //先找到此ID对应的对象
    const parent_id = temp.parent_id; //再找到此对象对应的福Id
    if (parent_id && map[parent_id]) {
      //如果有父节点，则把此节点添加到父节点的children数组中
      const parent = map[parent_id];
      parent.children = parent.children || [];
      parent.children.push(temp);
    } else {
      tree.push(temp);
    }
  });
  return tree;
};

export default generateMenuTree;
