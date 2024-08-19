/*
 * @Author: cris
 * @Date: 2023-07-31 13:15:23
 * @LastEditors: cris
 * @LastEditTime: 2023-09-04 19:44:07
 * @FilePath: /面试题/手写面试题/手写http请求.js
 * @Description: 
 * 
 */

const xhr = new XMLHttpRequest();
xhr.open('GET', '/list', false);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText());
    }
  }
};
xhr.send();