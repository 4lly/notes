/**
 *      回流： 
 *          当我们操作 dom 时，使其结构发生改变，从而影响整个布局，这个过程就会发生回流
 *          具体一点： 
 *                当元素的width，height，margin，padding，left，top发生改变时发生回流
 *                使dom节点增减或移动
 *                读写offset，client，scroll时，浏览器为了或者这些值，会进行回流操作
 *                使用 window.getComputedStyle
 *          页面至少会进行一次回流，页面第一次加载的时候  
 *          
 *      重绘：
 *          当改变元素时，只是改变它的外观，比如背景颜色等，没有影响到布局，这个时候发生重绘
 *          回流必将引起重绘，重绘不一定引起回流
 *      
 *      如何避免或减少
 *          尽量避免频繁使用style，而是使用 class 的方式
 *          使用creeateDocumentFragment
 *          对于resize 和 scroll 防抖节流
 * 
 * 
 * 
 * 
 * 
 */