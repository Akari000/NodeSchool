var map = require('through2-map');
var http = require('http');
var port = process.argv[2];
//var port = process.argv[2];

var server = http.createServer(function (req,res) {
    
    req.setEncoding("utf8");
    var data = "";
    
    req.on("data",function(chunk){//ここに入ってない
        data += chunk.toUpperCase();
        
        console.log(toUpperCase());
    });
    req.on("end",function(){
        res.write(data);
        res.end();
    });
    /*
    req.pipe(map(function (chunk) {
        return chunk.toString().split('').reverse().join('')
    })).pipe(res)
*/
})
server.listen(port)


