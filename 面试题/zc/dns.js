/**
 *  什么是 dns 预解析？ 
 *  正常输入 url 后，会进行dns域名解析，这个过程大概需要20-120ms，所以这个时候就出现了预解析，可以给当前页使用到的其他 url 进行
 *  预处理，提前进行预解析，这样再次访问这些域名的时候就不用 dns 预解析了。
 *  <meta  http-equiv="x-dns-prefetch-control" content="on">  // chrome 火狐新版等浏览器自动为 on，要关闭可以设置为 off
    <link  rel="dns-prefetch" href="//www.zhix.net">
    <link  rel="dns-prefetch" href="//api.share.zhix.net">
    <link  rel="dns-prefetch" href="//bdimg.share.zhix.net">

 *  缺点：有时不会访问的 url也进行了 dns 预解析，为了节约性能，会选择关闭 dns 预解析。
 * 
 *  
 * 
 *  dns 用的什么网络协议？ 
 *  
 *  dns在区域传输（将一个区域文件传输到多个dns 服务器的过程叫做区域传输）的时候用tcp，在域名解析的时候用的是udp
 * 
 */