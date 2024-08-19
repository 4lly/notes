/**
 * watch 和 watchEffect 的区别
 * 两者都可监听data属性变化
 * watch 需要明确监听哪个属性，默认初始化不执行
 * watchEffect 会根据其中的属性自动监听其变化,初始化时会执行一次
 * 
 * watch(data||()=>data,(newval,oldVal)=>{},{immediate:true})
 * watchEffect(()=>{})
 * 
 * 
 */