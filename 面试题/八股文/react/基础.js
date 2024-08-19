/**
 * 1、React事件和Dom事件的区别？
 * event是SyntheticEvent，模拟出来的Dom、事件所有能力
 * event.nativeEvent是原生事件对象、
 * react16所有的事件都被挂载到document上、react17绑定到root组件上
 * 和dom事件不一样、和Vue事件也不一样
 * react合成事件：事件冒泡到root节点，实例化统一的react event（SyntheticEvent），event对象交给对应的处理器执行
 * 
 * 2、setState 
 * 不可变值、可能是异步更新、可能会被合并
 * 
 * 不可变值
 * state要在构造函数中定义、函数组件没有state
 * 不能直接修改state、使用不可变数据、否则在使用SCU优化的时候，数据不会显示
 * this.state.num++ // 错误
 * this.setState({ // 正确
 *    num:this.state.num + 1
 * })
 * 操作数组、对象的常用形式
 * 
 * 数组：slice一个新数组，对新数组进行增删改、concat、...结构赋值、filter，不可直接对原数组进行push、pop、shift等，这样违反不可变值
 * 对象：Object.assign()、...结构赋值，不可直接对原对象进行属性设置，这样违反不可变值
 * 
 * 可能是异步更新
 * 需要通过回调函数、setTimeout、自定义Dom事件才能获取最新值
 * 
 * 可能会被合并
 * 传入对象会被合并、传入函数不会被合并this.setState((prevState,props)=>{
 *    return {num :prevState.num+1 }
 * })
 * 
 * 
 * react 17
 * react组件事件：异步更新+合并state
 * Dom事件，setTimeout：同步更新，不合并state
 * 
 * react 18
 * react组件事件：异步更新+合并state
 * Dom事件，setTimeout：异步更新，合并state
 * automatic Batching自动批处理
 * 
 *
 * 
 * 3、函数组件
 * 纯函数，输入props，输出jsx，
 * 没有实例，没有生命周期，没有state
 * 不能扩展其他方法
 * 
 * 4、受控组件、非受控组件
 * 受控组件：表单的值，受state控制，需要自行监听事件onChange，更新state
 * 非受控组件：必须手动操作dom元素，setState实现不了的情况下，ref，defaultValue，defaultChecked
 * 
 * 5、portals 
 * 组件默认按照既定层级嵌套渲染，让组件渲染到父组件以外 React.createPortal(html，dom节点) 使用场景：overflow：hidden、父组件z-index层级太小、fixed需要放在body第一层级
 * 
 * 6、context 传递数据
 * 公共信息传递到每一个组件，使用props太繁琐，使用redux小题大做
 * // 创建Context
 * const ThemeContext = React.createContext('light')
 * // 底层组件 - 函数组件
 * function ThemeLink (props) {
 *    return <ThemeContext.Consumer>
 *        {value = ><p>links is {value}</p>}
 *    </ThemeContext.Consumer>
 * }
 * 
 * // 底层组件 - class组件
 * class ThemeBtn extends React.Component  {
 *    render () {
 *        const theme = this.context // react会往上找最近的theme
 *        return <p>{theme}</p>
 *    }
 * }
 * ThemeBtn.contextType = ThemeContext // 指定contextType 读取ThemeContext
 * // 顶层组件
 * class App extends React.Component  {
 *    constructor (props) {
 *      supper(props)
 *      this.state = {
 *          theme:'pink'
 *      }
 *    }
 *    render(){
 *      return <ThemeContext.Provider value={this.state.theme}>kkk</ThemeContext.Provider>
 *    }
 * }
 * 
 * 
 * 7、异步组件
 * import()、React.lazy、React.Suspense
 * 
 * React.lazy(()=>import('./Comx'))
 * 
 * render () {
 *    return <React.Suspense fallback="loading"><Comx></Comx> </React.Suspense>
 * }
 * 
 */