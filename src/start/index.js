"use strict";
const utils = require("./bind");

utils.readTxt(); // 读取文件
// utils.readImg(); // 读取图片
utils.readTxtSync(); // 同步读取文件

// 在下一次事件轮询机制结束后执行的回调
process.nextTick(() => {
  console.log("nextTick回调");
});

// 在程序即将退出时执行
process.on("exit", code => {
  console.log("即将退出..", code);
});

setTimeout(() => {
  console.log("timeout");
}, 500);
