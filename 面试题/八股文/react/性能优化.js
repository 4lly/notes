/*
 * @Author: cris
 * @Date: 2023-08-01 18:36:52
 * @LastEditors: cris
 * @LastEditTime: 2023-08-02 14:52:06
 * @FilePath: /面试题/八股文/react/性能优化.js
 * @Description: 
 * 
 */

/**
 * React性能优化 
 * React默认：父组件有更新，子组件无条件更新
 * shouldComponentUpdate(nextProps,nextState) 默认返回true 表示重新渲染所有组件渲染 需配合不可变值使用
 * PureComponent：SCU中实现了浅比较
 * React.memo：函数组件中的PureComponent
 * 不可变值
 * 按需使用 & state 层级
 * 渲染列表使用key
 * 自定义事件、dom事件及时销毁
 * 合理使用异步组件
 * 减少函数bing this的次数
 * 
 * 
 */