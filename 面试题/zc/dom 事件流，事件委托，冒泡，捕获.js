/**
 *  DOM 事件流  三个阶段
 *      捕获阶段  目标阶段  冒泡阶段
 *      在 addeventlistener（）第三个参数（useCapture）设为 true，就会在捕获阶段运行，默认是 false 冒泡
 * 
 *  事件委托
 *      利用冒泡原理（子向父一层层穿透），把事件绑定到父元素中，以实现事件委托
 *      
 *  事件冒泡和事件捕捉的区别：
 *       冒泡：在addeventlistener中的第三个属性设置为false 默认
 *            从下至上（儿子到祖宗）执行
 *        捕捉：在 addeventlistener中的第三个属性设置为true
 *            从上至下（祖宗到儿子）执行
 * 
 * 
 * 
 */