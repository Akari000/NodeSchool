var map = require('through2-map');
var http = require('http');
var port = process.argv[2];


var server = http.createServer(function (req,res) {
    
    req.setEncoding("utf8");
    var data = "";
    req.on("data",function(chunk){
        data += chunk.toUpperCase();
        res.write(chunk.toUpperCase());
        console.log(chunk);
    });
    req.on("end",function(){
        res.end("");
        console.log(data);
    });
})
server.listen(port)


/*
res.write(data);でdataが読めない
→非同期処理のため
*/

