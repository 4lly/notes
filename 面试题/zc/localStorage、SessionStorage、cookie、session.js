/**
 *  localStorage:
 *        生命周期：关闭浏览器后数据依然保留，除非手动清除，否则一直在
 *        作用域：相同浏览器的不同标签同源的情况下可以共享localStorage
 * 
 *  SessionStorage:
 *        生命周期：关闭标签或者浏览器后失效
 *        作用域：只在当前标签可用，当前标签 iframe 且同源可以共享
 * 
 *  cookie：一开始 cookie 不是用来储存的，而是为了弥补http 的不足，http 是无状态的 ，对事务处理没有有记忆能力，
 *            意味着前面的请求参数啥的后面需要重新传，每次连接传输量巨大
 * 
 *          cookie 有很多缺陷： 容量缺陷，存储空间只有 4kb
 *                            性能缺陷，有时候 cookie 我们用不到，但是http 发送请求的时候一定会带上 cookie，这就造成了性能浪费
 *                            安全缺陷，cookie 在 http 下容易被非法用户获取，尤其设置了 http-only false的时候，这时候 js 可以读取 cookie，容易被 xss
 *          cookie 是保存在客户端的，一般由server 设置值及过期时间
 *                 cookie没有提供删除的 api，可以把 max-age设为 0 或者expire设置为当前时间或者过去时间
 * 
 *          cookie 的属性
 *                http-only 不能被客户端更改访问，防止 xss 攻击
 *                max-age 生效后存活的时间
 *                secure  是否允许在https下传输
 *                expire 过期时间
 * 
 *  session： 保存在服务端
 *            session的运行依赖sessionId保存在 cookie 中，所以禁用cookie之后 session 也是用不了的，实在要用可以把 sessionId储存在 url 中
 *            
 *            session 一般是用来跟踪用户状态的
 *            
 *            session 比较安全，因为储存在服务器中，不过为了减少服务器压力，很多信息还是建议存储在 cookie 中
 *  
 */