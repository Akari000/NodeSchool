var fs = require('fs');
var http = require('http')
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function (req,res) {
    // req = HTTPのプロパティ
    // res = クライアントにヘッダーやボディを返すためのオブジェクト
    var data = "";
    req.setEncoding("utf8");
    var file = fs.createReadStream(path); //非同期で呼び出す準備
    file.on("data",function(chunk){
        data+=chunk;
    });
    file.on("end",function(){
        console.log(data);
    });
    req.on('end',()=>{
        console.log('request read end');
        res.write("hello world\n");
        res.end();
    });
})
server.listen(port)