const fs = require("fs");

function sayHello() {
  console.log("hello");
}

function sayBye() {
  console.log("bye");
}

// 异步读取文件
function readTxt() {
  fs.readFile("src/note/note01.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("读取文件出错：", err);
    } else {
      console.log("读取文件成功：", data);
    }
  });
}

// 同步读取文件
function readTxtSync() {
  try {
    const res = fs.readFileSync("src/note/note01.txt", "utf-8");
    console.log("同步读取文件：", res);
  } catch (err) {
    console.log("同步读取文件出错：", err);
  }
}

// 异步读取图片文件
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

// 异步写入文件
function toWriteFile() {
  const data = "hello,node";
  fs.writeFile("src/note/note01.txt", data, err => {
    if (err) {
      console.log("写入失败：", err);
    } else {
      console.log("写入成功");
    }
  });
}

// 异步读取文件信息
function getFileInfo() {
  fs.stat("src/note/note01.txt", (err, stat) => {
    if (err) {
      console.log("获取文件信息出错", err);
    } else {
      if (stat.isFile()) {
        console.log("fileSize：", stat.size, "birth time", stat.birthtime);
      }
    }
  });
}

// stream读取文件
function streamReadFile() {
  const rs = fs.createReadStream("src/note/note01.txt", "utf-8");
  rs.on("data", chunk => {
    console.log("开始读取文件流...");
    console.log(chunk);
  });
  rs.on("end", () => {
    console.log("读取结束");
  });
  rs.on("error", err => {
    console.log(err);
  });
}

// stream写入文件
function streamWrite() {
  const data1 = "one lines";
  const data2 = "two lines";
  const towr = fs.createWriteStream("src/note/note01.txt", "utf-8");
  console.log("开始流写入...");
  towr.write(data1);
  towr.write(data2);
  towr.end();
  console.log("流写入完成...");
}

// 流复制文件
function copyFile() {
  const rs = fs.createReadStream("src/note/sample.txt", "utf-8");
  const ws = fs.createWriteStream("src/note/beifen.txt", "utf-8");
  rs.pipe(ws);
}

module.exports = {
  sayHello,
  sayBye,
  readTxt,
  readTxtSync,
  readImg,
  toWriteFile,
  getFileInfo,
  streamReadFile,
  streamWrite,
  copyFile
};
