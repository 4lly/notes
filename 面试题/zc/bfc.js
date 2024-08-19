/**
 *  块格式化上下文  BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
 *                是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
 *  
 *  特性： 同一个 bfc 下margin会重叠
 *        计算 bfc高度时会算上浮动元素
 *        bfc不会影响到外部元素
 *        bfc 内部元素是垂直排列的
 *        bfc区域不会与float元素重叠
 * 
 *  如何创建 bfc： 
 *        position设为absolute或者 fixed
 *        float 不为 none
 *        overflow设置为hidden
 *        display 设置为 inline-block或者inline-table或flex 
 * 
 * 
 * 
 * 
 */