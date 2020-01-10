# learnNode

learnNode，created at 2020/01/09

## 一、对比 require、import 和 module.export、export、exports

1. require：node 和 es6 都可以使用；
2. module.exports 和 exports：只有 node 可以使用；
3. import 和 export：只有 es6 可以引用；

## 二、关于 process

1. `process.nextTick([function])` --在事件轮询结束后执行的钩子；
2. `process.on('exit',[function])` --在 node 马上执行完要退出时执行的钩子；

## 三、关于读取文件

1. 文件读取系统是 node 的内置模块，名字是 'fs' ,有异步读取和同步读取两种

- `fs.readFile('path','unicode',(err,data)=>{})`
- 读取图片文件时不需要指定编码，返回的是 Buffer 对象
- `buffer.toString('utf-8')` 可以转 utf-8 编码
- `Buffer.from(str)` 可以把 string 转 buffer

2. 同步读取不需要写回调函数，同步返回的就是读取到的内容

- `try{const res = rs.readFile('path','utf-8')}catch(err){console.log(err)}`

## 四、关于写入文件

1. `fs.writeFile('path',data,err=>{})` 此操作将会覆盖原先内容
2. `fs.stat('path',(err,stat)=>{})` 获取文件的信息

- stat.isFile/.isDirectory/.size/.birthtime/.mtime

## 五、关于 stream

1. 流读取
   `const rs = fs.createReadStream('path','unicode')`
   `rs.on('data',(res)=>{})`
   `rs.on('end',()=>{})`
   `rs.on('error',(err)=>{})`
2. 流写入
   `const ws = fs.createWriteStream('path','unicode')`
   `ws.write(data)`
   `ws.end()`
3. 复制内容
   `rs.pipe(ws)`

## 六、关于 http server

1. http 是 node 的内置模块，可用于创建 server
   `const server = http.createServer((request,response=>{ console.log(request.method,request.url) response.writeHead(200,{'Content-Type':'text/html'}) response.end('<h1>welcome</h1>') }))`
