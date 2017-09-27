// 导入express对象
let express = require('express');
let app = express();

// 导入文件读取系统
let fs = require("fs");

app.get('/list', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  fs.readFile(__dirname + "/assets/morse/" + "morse.json", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

let server = app.listen(8081, function () {
  // 获取端口
  let port = server.address().port

  console.log("应用实例，访问地址为 http://localhost:%s", port)

})