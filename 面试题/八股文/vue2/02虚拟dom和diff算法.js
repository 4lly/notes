/**
 *1、 vdom由来
 * dom操作非常耗费性能
 * 以前使用jq，可自行控制dom操作时机，手动调整
 * vue和react是数据驱动视图，为了有效控制dom，使用vnode（用js模拟dom结构），新旧vnode对比，得出最小更新范围，最后更新dom
 * vdom 核心概念：h、vnode，patch、diff、key
 * 
 * 2、diff算法
 * 只比较同一层级，不夸级比较
 * tag不相同，则直接删掉重建，不再深度比较
 * tag和key，两者都相同，则认为是相同节点，不再深度比较
 * 
 * 
 * 
 */