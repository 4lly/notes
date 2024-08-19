/**
 *    jsonp 
 *    script src 不受跨域影响  前端定义一个回调函数  服务器调用传参
 *    
 *    document.domain
 *    只能跨子域，需要主域想同才能使用
 *    
 *    location.hash+iframe
 * 
 *    window.name+iframe
 *    同一个window 下 name 只有一个，如果该 window 下有一个 iframe也是共享的，这个时候就可以使用 window.name（只能接收字符，可以使用 JSON 格式）来进行数据的传输。
      父窗口设置好 window.name 后 ，子窗口 iframe 可进行读取
 * 
      postmessage

      CORS
      
      nginx代理跨域

      websocket

 */