/**
 *   link标签和import标签的区别？
 *   link属于html，而‘@import’属于 css
 *   页面被加载时，link 会同时被加载，而‘@import’引用的 css会等到页面加载结束后加载
 *   link是 html 标签，因此没有兼容性，而‘@import’只有 ie5以上才能识别
 *   link 方式样式的权重高于‘@import’
 * 
 * 
 *  css优先级问题？
 *  important无条件优先，
 *  内联样式 1000 
 *  id 选择器 100
 *  class 伪类 属性 10 
 *  标签 伪元素 1
 * 
 *  css 变量 ？
 *  使用--开头定义变量，用 var（）去使用
 * 
 *  怪异盒模型和标准盒模型的区别 ？
 *  标准盒模型的总高度为width+padding+border+margin
 *  怪异盒模型总宽度是 width+margin（width 已经包含了padding 和border了）
 *  当 box-sizing设置为content-box 为标准盒模型，当 box-sizing设置为border-box为怪异盒模型
 * 
 *  如何使div可聚焦？
 *  使div可聚焦，为元素加上tabIndex属性，按键盘上的tab键时在他们之间切换   tabindex="2"
 * 
 * 
 *  html5特性？
 *  语义化标签：header，footer，section 等
 *  input 优化：type 类型，设置成 number、tel、email 等等
 *  表单优化：设置成 number、tel、email 等等
 *  canvas
 *  audio等
 *  
 *  css 新特性？
 *  圆角，阴影，动画，box-sizing
 *  
 */