# learnNode

learnNode，created at 2020/01/09

# 一、对比 require、import 和 module.export、export、exports

1.require：node 和 es6 都可以使用；
2.module.exports 和 exports：只有 node 可以使用；
3.import 和 export：只有 es6 可以引用；

# 二、关于 process

1.process.nextTick([function]) --在事件轮询结束后执行的钩子；
2.process.on('exit',[function]) --在 node 马上执行完要退出时执行的钩子；

# 三、关于读取文件 1.文件读取系统是 node 的内置模块，名字是 'fs' ,有异步读取和同步读取两种

--fs.readFile('path','unicode',(err,data)=>{})
--读取图片文件时不需要指定编码，返回的是 Buffer 对象
--buffer.toString('utf-8') 可以转 utf-8 编码
--Buffer.from(str) 可以把 string 转 buffer 2.同步读取不需要写回调函数，同步返回的就是读取到的内容
--try{
const res = rs.readFile('path','utf-8')
}catch(err){
console.log(err)
}
