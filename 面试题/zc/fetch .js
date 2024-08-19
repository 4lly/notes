// fetch脱离了XHR，基于promise实现

// 对某些错误不会reject，比如状态码400、500

// fetch不支持超时timeout处理

// fetch默认不携带cookie，需要手动配置

// fetch没有办法监测请求进度，而xhr可以