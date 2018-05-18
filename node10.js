var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var path = process.argv[3];

    
var server = http.createServer(function (req,res) {
    req.setEncoding("utf8");
    console.log("ok");
    var data = "";
    var file = fs.createReadStream(path); 
    file.on("data",function(chunk){
        res.write(chunk);
    });
    file.on("end",function(){
        res.end("request end");
    });
    // req = HTTPのプロパティ
    // res = クライアントにヘッダーやボディを返すためのオブジェクト
});
server.listen(port)




/*
res.setEncoding("utf8");出来ないわけ
res.write(data);でdataが読めない
->非同期処理が原因
  dataを読む前に
  res.end("request end");が呼ばれた．
streamを活かすために，res.write(chunk);を
file.on("data",のなかで呼び出し，少しづつデータを渡す仕様にした．

req.on('end'が読まれなかったのは↓を書いて解決した
req.on("data",function(){});
ブラウザから読む(node09では"net"を使っているためtelnet)


*/