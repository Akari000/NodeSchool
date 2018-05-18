
var http = require('http');
var url= require('url');
var port = process.argv[2];


function parsetime(time){
    return{
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    };
}
function unixtime(time){
    return{
        "unixtime": time
    };
}

var server = http.createServer(function (req,res) {
    req.setEncoding("utf8");

    var result = url.parse(req.url,true);//isoがキーになる
    //var date = new Date(result.query.iso);
    console.log(result);
    var date = new Date(result.query.iso);
    console.log("date=" + date);
    if(result.pathname === '/api/parsetime'){

        console.log(parsetime(date));
        res.write(JSON.stringify(parsetime(date)));
        res.end();
    }else if(result.pathname === '/api/unixtime'){
        date = date.getTime();

        console.log(JSON.stringify(unixtime(date)));
        res.write(JSON.stringify(unixtime(date)));
        res.end();
    };
})
server.listen(port)


/*
First argument must be a string or Buffer
サーバにオブジェクト型で返してしまった．
*/