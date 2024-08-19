
// 1、http常见的状态吗有哪些？
// 1xx 服务器收到请求
// 2xx 请求成功 如200
// 3xx 重定向 如301（永久） 302（临时） 304（资源未被修改）
// 4xx 客户端错误 如 404(资源未被找到) 403（没有权限）
// 5xx 服务端错误 如500（服务器错误） 504(网关超时)

// 2、http常见的header有哪些？
// requestHeaders：accept accept-Encoding accept-Languange connection cookie host user-Agent Content-type headers
// respondHeaders：Content-type Content-lenght Content-Encoding set-Cookies


// 3、什么是restful Api？
// 一种新的Api设计方式
// 传统Api设计：把每一个Url当一个功能
// RestfulApi设计：把每一个url当作一个唯一标识 1、尽量不使用参数 2、用method表示操作类型 get post patch update delete put

// 4、缓存相关的headers？
// Cache-Control Expires（替代） Last-Modified If-Modified-Since Etag If-None-Match

// 5、http的缓存机制？
// http请求 有缓存 判断缓存是否过期 
//  没过期 读取缓存（强缓存） 页面呈现
//  过期 判断是否有Etag和Last-Modified？
//    没有 向服务器发起http请求 服务器返回请求资源 页面呈现
//    有 向服务器发起http请求 带If-None-Match、If-Modified-Since字段  服务器判定缓存是否可用 如状态码200 服务器返回请求资源 页面呈现 如状态码304 读取缓存 =>协商缓存 页面呈现

// 6、刷新对缓存的影响
// 正常操作：地址栏输入url 跳转链接 前进后退等
// 手动刷新：F5、点击刷新按钮，右键菜单刷新
// 强制刷新：ctrl+F5
// 正常操作：强缓存有效 协商缓存有效
// 手动刷新：强缓存失效 协商缓存有效
// 强制刷新：强缓存失效 协商缓存失效

// 7、http加密方式
// 对称加密：一个key 同时负责加密、解密
// 非对称加密：一对key，A加密之后只能用B来解密