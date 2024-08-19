/*
  首先，正常情况下，script标签是会阻塞dom 解析的，所以我们尽量不要把 script放在 head里，要尽量放在 body 下方，这样不至于会出现白屏的效果。
  
  defer和 async；异步加载 js 代码。

  defer：给 script标签添加defer 属性后，就不会阻碍 dom 解析，等 dom渲染完成之后才会运行该 js 代码，如果多个script标签都加了 defer 属性，
        那么他们是按照顺序执行的（第一个全部执行完成之后才能执行第二个），defer的 script 是在DOMContentLoaded之前运行的

  async：给 script 添加 async 后会异步下载 js，等下载完成之后立即运行 js 代码，多个 script 代码同时设置了async是没有先后顺序的，谁先加载
        完谁就先运行

        如果script标签没有任何 dom 操作，且彼此不依赖的话，可以使用 async

  DOMContentLoaded： 是等html 文档完全加载完和解析完后运行的事件 
                   在 load事件之前
                  不用等样式表、图像等完成加载
*/