/**
 *  主要是双击缩放问题，浏览器无法判断点击的第一次是纯点击还是双击，所以有了一个 300ms 的延时来判断
 * 
 *  1.设置一个 meta 标签 
 *   禁止缩放（Chorm和Firfox支持,Safari比较麻烦他还有双击缩放还有双击滚动操作）：
 *            <meta name="viewport"content="user-scalable=no,initial-scale=1,maximun-scale=1"/>
 *            这样双击缩放功能就没有意义了 此时浏览器可以禁用默认的双击缩放行为并且去掉300ms的点击延迟。 
 * 
 *  更改默认的视口宽度 (Chorm和Firfox支持 Safari比较麻烦他还有双击缩放还有双击滚动操作):
 *            <meta name="viewport"content="width=device-width"/>
 *              如果能识别出一个网站是响应式的网站 那么移动端浏览器就可以自动禁止双击缩放行为并去掉300ms的点击延迟。
                设置上述的meta标签 那么浏览器就可以认为网站已经对移动端做过适配优化 就无需双击操作。
 *  
 *  
 *  2.fastClick 插件
 * 
 *  
 *  3.自己实现
 *     大致思路，封装一个函数，两个参数，一个是目标对象，一个是点击后的回调函数；在 ontouchstart开始计时，在 ontouchend计时结束，超过 150ms 就
 *  
 * 
 * 
 */

//封装函数,处理延迟300ms问题
function tap(obj, callback) {
  var isMove = false;
  var startTime = 0;
  obj.addEventListener('touchstart', function () {
    startTime += Date.now();
  })
  obj.addEventListener('touchmove', function () {
    isMove = true;
  })
  obj.addEventListener('touchend', function () {
    if (!isMove && (Date.now() - startTime) < 150) {
      callback && callback();
    }
    isMove = false;
    startTime = 0;
  })
}
