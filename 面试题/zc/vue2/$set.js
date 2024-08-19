/*
 *    data 中的属性，如果是对象，会把它的属性转为 object.defineProperty的 getter 和 setter，使之变成响应式，
      但是新增的属性不是响应式 ，this.$set(this.obj,'e',0)    (对象，索引，需要赋的值)
 * 
 *    
 * 
 * 
 */