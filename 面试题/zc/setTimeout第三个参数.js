// 可以作为参数传给函数  一般作为 for 循环赋值

for (var i = 0; i < 6; i++) {
  setTimeout((i) => {
    console.log(i)
  }, i * 1000, i)
}