"use strict";
const utils = require("./bind");

// utils.readTxt(); // 读取文件
// // utils.readImg(); // 读取图片
// utils.readTxtSync(); // 同步读取文件
// utils.toWriteFile(); // 异步写入文件
// utils.getFileInfo(); // 异步获取文件信息
// utils.streamWrite(); // stream流写入文件
// utils.streamReadFile(); // stream读取文件
utils.copyFile(); // 复制文件

// 在下一次事件轮询机制结束后执行的回调
process.nextTick(() => {
  console.log("nextTick");
});

// 在程序即将退出时执行
process.on("exit", code => {
  console.log("即将退出..", code);
});
