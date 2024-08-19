// constructor 在类中作为一个钩子函数，有 constructor钩子函数的时候，可以定义 state，如果不定义 state，有无 constructor钩子函数没什么区别

//super 
// 子类必须在 constructor 中调用 super，否则新建实例的时候会报错。这是因为子类自己的 this 对象，必须先通过父类的构造函数完成塑造，
// 得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法，如果不调用 super，子类会得不到 this对象