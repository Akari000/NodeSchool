var http = require("http");
var url = require("url");
var portNum = process.argv[2];

//parseしたクエリパラメータをjsonで返却する
function parsetime(time) {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  };
}

function unixtime(time) {
  return { "unixtime": time.getTime() };
}

//サーバー起動
var server = http.createServer(function(req, res) {

  if(req.method == "GET") {
    res.writeHead(200, { 'Content-type': 'application/json' });
    var parseUrl = url.parse(req.url, true);
    var time = new Date(parseUrl.query['iso']);
    var result;
    if(parseUrl.pathname == '/api/parsetime') {
      result = parsetime(time);
      console.log(result);
    } else if(parseUrl.pathname == '/api/unixtime') {
      result = unixtime(time);
      console.log(result);
    }
    //結果をJSON文字列の形式に変更
    res.write(JSON.stringify(result)+ '');
    res.end();
  }
});

//サーバ待ち受け
server.listen(portNum);
console.log('app listening on port: ', portNum);