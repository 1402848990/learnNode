const fs = require("fs");

function sayHello() {
  console.log("hello");
}

function sayBye() {
  console.log("bye");
}

//异步读取文件
function readTxt() {
  fs.readFile("src/note/note01.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("读取文件出错：", err);
    } else {
      console.log("读取文件成功：", data);
    }
  });
}

//同步读取文件
function readTxtSync() {
  try {
    const res = fs.readFileSync("src/note/note01.txt", "utf-8");
    console.log("同步读取文件：", res);
  } catch (err) {
    console.log("同步读取文件出错：", err);
  }
}

//异步读取图片文件
function readImg() {
  fs.readFile("src/img/img1.png", (err, data) => {
    if (err) {
      console.log("读取图片出错：", err);
    } else {
      console.log("读取图片成功：", data);
      console.log(`${data.length}bytes`);
    }
  });
}

module.exports = {
  sayHello,
  sayBye,
  readTxt,
  readTxtSync,
  readImg
};
