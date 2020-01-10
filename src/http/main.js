"use strict";
const http = require("http");

startServer();

function startServer() {
  const server = http.createServer((request, response) => {
    console.log(`请求方法：${request.method}，请求url：${request.url}`);
    response.writeHead("200", { "Content-Type": "text/html" });
    response.end("<h1>Welcome</h1>");
  });
  server.listen(8088);
  console.log("server is running... ");
}
