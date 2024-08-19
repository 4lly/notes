/**
 *  hash模式
 *      监听hashchange 事件实现前端路由，利用url 中的 hash 来模拟一个 hash，以保证url 改变时，页面不会重新加载
 * 
 *  history模式
 *      利用pushstate和 replacestate来将url 替换但不刷新，但是有一个致命的缺点就是，一旦刷新，可能就会 404，因为没有当前真正的路径，
 *      要想解决这一问题需要后端配合，将不存在的路径重定向到入口文件
 * 
 * 
 * 
 *  keep-alive  include/exclude   有一个最大缓存限制，使用lru（最久未使用法）（使用了就放在最上面，先删最下面）
 * 
 * 
 *  beforeRouteLeave离开路由之前的操作  beforeEach （to，from，next）  afterEach
 */