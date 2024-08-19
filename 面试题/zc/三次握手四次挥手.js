/**
 *  服务端与客户端三次握手建立连接，四次挥手释放连接
 *  
 *  三次握手，客户端先向服务端发起一个SYN包，进入SYN_SENT状态，服务端收到SYN后，给客户端返回一个ACK+SYN包，表示已收到SYN，
 *  并进入SYN_RECEIVE状态，最后客户端再向服务端发送一个ACK包表示确认，双方进入establish状态。

    之所以是三次握手而不是两次，是因为如果只有两次，在服务端收到SYN后，向客户端返回一个ACK确认就进入establish状态，
    万一这个请求中间遇到网络情况而没有传给客户端，客户端一直是等待状态，后面服务端发送的信息客户端也接受不到了。


    四次挥手，首先客户端向服务端发送一个FIN包，进入FIN_WAIT1状态，服务端收到后，向客户端发送ACK确认包，进入CLOSE_WAIT状态，
    然后客户端收到ACK包后进入FIN_WAIT2状态，
    然后服务端再把自己剩余没传完的数据发送给客户端，发送完毕后在发送一个FIN+ACK包，进入LAST_ACK（最后确认）状态，
    客户端收到FIN+ACK包后，再向服务端发送ACK包，在等待两个周期后在关闭连接

    之所以等待两个周期是因为最后客户端发送的ACK包可能会丢失，如果不等待2个周期的话，服务端在没收收到ACK包之前，
    会不停的重复发送FIN包而不关闭，所以得等待两个周期

 * 
 * 
 */