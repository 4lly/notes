<!--
 * @Author: cirs
 * @Date: 2024-09-09 12:44:04
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-11 13:35:27
 * @FilePath: /notes/解决方案/大文件上传/README.md
 * @Description:
 *
-->

1.创建项目 `npx create-react-app uploadfile-client` `npm install @ant-design/icons antd axios`

2.绘制页面 `src/index.js` `src/FileUploader/index.js` 3.拖入文件 `src/FileUploader/index.js` `src/FileUploader/useDrag.js` 4.检查并预览文件 `src/FileUploader/index.js` `src/FileUploader/useDrag.js` 5.分片上传 6.上传进度 7.秒传 8.暂停上传 9.断点续传 10.webwork 处理分片以及获取 hash filename

## 处理文件的上传

- 为了提升性能，在上传一个大文件的时候，可以把一个大文件切成多个小文件，然后并行上传
- 另外为了后面实现类似秒传功能，所以需要对文件进行唯一标识
- 所以我们需要根据文件的内容生成一个 hash 值来表示唯一的这个文件

  - 文件内容如果是一样的，产生的文件名是一样的
  - 实现点击选择文件上传
  - 并发量控制，在同一时间内最多并行上传 5 个分片
  - 切片数量动态调整，自适应
  - 合并之后做一下文件校验，保证文件未被篡改
  - 并发控制

- 想实现秒传的功能，需要服务器提供一个接口，返回已经上传的分片和大小

  let count = Math.ceil(file.size / CHUNK_SIZE);

  ## 请请求体使用文件流与 formdata 有什么区别

  用文件流的话只能上传二进制文件如果用 formData 的话可以同时上传文件和普通字段
