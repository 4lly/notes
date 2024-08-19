/**
 *  强缓存
 *        在客户端发起请求之前，先检查强缓存，查看强缓存的cache-control里面的max-age，判断数据有没有过期，如果没有直接使用该缓存，
 *        有些用户可能没过期的时候就点击刷新了，这个时候浏览器又会去请求服务器，要想避免这种情况，可以在 cache-control 里面加一个 immutable
 *        这样刷新的时候 max-age 没过期就不会去重新请求资源
 *        
 *        public
 *            因为服务器返回数据的过程中可能会经过很多虚拟代理服务器，他们可以进行缓存，使用 public 就是允许他们进行缓存
 *        private
 *            不允许代理服务器缓存，允许客户端缓存
 *        no-cache
 *            不允许强缓存，允许协商缓存
 *        no-store
 *            不允许缓存
 * 
 *  协商缓存
 *        浏览器加载资源的时候没有命中强缓存，就去请求服务器，会带着两个参数，一个是IF-None-Match，也就是响应头用的 etag属性，每个文件对应一个 etag，
 *        另一个参数是IF-Modified-Since，也就是响应头中的Last-Modified属性，带着这两个参数去校验参数是否真的过期，如果没有，返回一个 304，表示
 *        没有过期，继续使用旧缓存
 *        etag 的作用
 *            有时候编辑了文件，但是没有修改，但是last-modified属性的时间就会改变，导致服务器会重新发送资源，但是etag的出现就完美的避免了这个问题，他是文件的唯一标识
 *        last-modified和etag各有各自的优点和缺点：
              每个文件都有一个 etag 和 last-modified 属性，etag 要优先于 last-modified，两个属性各有优缺点，比如 last-modified 很多时候不能感知文件是否改变，
              但 etag 能；last-modified 仅仅记录了时间点，性能肯定要高于etag，etag 记录的是哈希值

 *  缓存位置 
         内存缓存Memory-Cache
          离线缓存Service-Worker
          磁盘缓存Disk-Cache
          推送缓存Push-Cache
          
 */