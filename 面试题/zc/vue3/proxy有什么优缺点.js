/*  
 *    优点：不会像Object.defineProperty那样遍历vue 中的data，computed，props的全部属性，只是经过了一个类似拦截的操作
            而且也可以监听数组的变化，不会像 2 一样重写数组的方法


      缺点：对浏览器版本要求高，因为 polyfill没办法弥补proxy？如果想弥补，最多还是只能使用 object.defineProperty
 * 
 * 
 */