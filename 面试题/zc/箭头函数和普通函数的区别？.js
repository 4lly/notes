/**
   * 箭头函数是普通函数的简写，但是它不具备很多普通函数的特性
  第一点，this指向问题，箭头函数的this指向它定义时所在的对象，而不是调用它的对象
  不会进行函数提升
  没有arguments对象，不能使用arguments，如果要获取参数的话可以使用rest运算符
  没有yield属性，不能作为生成器Generator使用
  不能new
  没有自己的this，不能调用call和apply
  没有prototype，new关键字内部需要把新对象的_proto_指向函数的prototype
 * 
 */