/**
 *  new Vue的时候调用会调用_init方法

    定义 $set、$get 、$delete、$watch 等方法
    定义 $on、$off、$emit、$off等事件
    定义 _update、$forceUpdate、$destroy生命周期
    调用$mount进行页面的挂载

    挂载的时候主要是通过mountComponent方法

    定义updateComponent更新函数

    执行render生成虚拟DOM

    _update将虚拟DOM生成真实DOM结构，并且渲染到页面中
 * 
 * 
 * 
 * 
 * vue构造函数调用_init方法，其中定义了很多初始化方法
 * 
 * 在调用 beforeCreate之前 ，数据初始化并未完成，像 data，props这些属性无法访问到
 * 
 * 到了 created的时候，数据已经初始化完成，能访问data，props这些属性，但这个时候并未完成 dom，因此无法访问到dom 元素
 * 
 * 挂载方法是调用vm.$mount
 * 
 *  initLifecycle(vm)    初始化生命周期 
 *  initEvents（vm）     初始化组件事件监听 
 *  initRender（vm）    初始化渲染方法  
 *  callHook(vm, 'beforeCreate')
 *  initInjections（vm）   resolve injections  before  data/props  初始化依赖注入内容，在 data，props 之前  
 *  initState（vm）  初始化props/data/method/watch/methods   
 *  initProvide（vm）  // resolve provide after data/props 
 *  callHook(vm, 'created')
 * 
 *  初始化data 的方法为 initdata 与 initState在同一文件
 * 
 *  初始化顺序props  methods data 
 *  
 *  data 定义的时候可以选择函数形式或者对象形式（组件只能为函数形式）  
 *  
 *  vue 不允许直接挂载到 body或页面文档html上 
 *  
 *  可以再对象定义template/render 或者直接使用 template el表示元素选择器
 * 
 *  最终都会解析成render 函数，调用compileToFunctions，会将template解析成render 函数
 *  步骤：将 html文档片段解析成ast 描述符，将 ast 描述符解析成字符串，生成 render 函数
 *  生成的 render函数会挂载到 vm，再调用 mount
 * 
 *  再调用mountComponent渲染组件
 *
 *  触发 beforeCreate 
 * 
 *  定义 updateComponent渲染页面视图的方法      updateComponent 方法主要执行在vue 初始化时声明的render、update 方法
 * 
 *  监听组件数据，一旦发生变化，触发beforeUpdate生命钩子
 *  
 *  render 的作用主要是生成 vnode
 * 
 *  _update的主要功能是调用patch，将 vnode 转换成真实dom，并更新到页面中
 * 
 * 
 * 
 * 
 * 
 *  
 */