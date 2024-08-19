/*
 * @Author: cris
 * @Date: 2023-07-31 22:40:19
 * @LastEditors: cris
 * @LastEditTime: 2023-09-07 18:00:38
 * @FilePath: /面试题/八股文/js/从输入url到渲染出页面的整个过程.js
 * @Description: 
 * 
 */


/**
 * 
 * 
 * 1、加载资源的形式
 * html、媒体文件、图片视频、js、css
 * 
 * 2、加载资源的过程
 * dns解析：域名=>ip地址
 * 浏览器根据IP地址向服务器发起http请求
 * 服务器处理http请求，并返回给浏览器
 * 3、渲染过程
 * 根据html代码生成DOM Tree
 * 根据css代码生成CSSOM
 * 将DOM Tree和CSSOM 整合成Render Tree
 * 根据Render Tree 渲染页面
 * 遇到<script>则暂停渲染，优先加载并执行js代码，完成再继续
 * 
 */