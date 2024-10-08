
// 常见的web前端攻击方式有哪些？

// 1、xss跨站请求攻击
// 发表博客嵌入<sscript></sscript>,获取cookie 发送到我的服务器，（服务器配合跨域）
// 解决办法：替换特殊字符

// 2、xsrf跨站请求伪造
// 你在购物、看中某个商品，商品id是100，付费接口是xxx/pay?id=100,但没有任何验证、我是攻击者、我看中了一个商品，id是200、我向你发送一封电子邮件、标题很吸引人。
// 但是邮件正文隐藏着<ing src="xxx/pay?id=200"></ing>,你一查看邮件，就帮我购买了id是200的商品
// 解决办法：使用post接口，增加验证，例如密码、短信验证码、指纹