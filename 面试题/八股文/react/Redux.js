/*
 * @Author: cirs
 * @Date: 2024-08-19 21:24:36
 * @LastEditors: cirs
 * @LastEditTime: 2024-08-19 21:32:43
 * @FilePath: /notes/面试题/八股文/react/Redux.js
 * @Description: 
 * 
 */

/**
 * 1、Redux
 * 基本概念
 * store state，action reducer
 * 单项数据流
 * dispatch(action) =>reducer=>newState =>subscribe 触发通知
 * 
 * 2、React-redux 
 * Provider、connect、mapStateToProps，mapDispatchToProps
 * 
 */
import { Provider } from 'react-redux';

import { createStore } from 'redux';
function reducers (state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    default:
      return state;
  }
}
let store = createStore(reducers);
// 使用react-redux
export default function () {
  return <Provider store={store}></Provider>;
}

const Demo = connect((state) => {
  return {
    name: state.name
  };
}, (dispatch) => {
  return {
    onCheck: (id) => {
      dispatch({ type: 'add', id, text: 'ad' });
    }
  };
})(ComA);