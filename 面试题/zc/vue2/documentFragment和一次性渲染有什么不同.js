/**
 *  documentFragment是一个保存多个element的容器对象（保存在内存）当更新其中的一个或者多个element时，页面不会更新。
 *  只有当documentFragment容器中保存的所有element更新后再将其插入到页面中才能更新页面。
 * 
 *  documentFragment首先是虚拟的，它的节点增加与删除肯定不会引起dom 的变化，所以如果增加节点或删除节点使用 documentFragment
 *  的话，会减少回流操作
 * 
 *  vue 也是使用了createDocumentFragment的，如果初次渲染，使用documentFragment会多一个步骤，也就是创建 documentFragment的步骤
 *  所以首次加载是很慢的
 * 
 * 
 */