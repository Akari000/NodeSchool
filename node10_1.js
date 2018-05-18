var http = require("http");
var fs = require("fs");
var portNum = Number(process.argv[2]);
var filePath = process.argv[3];

var server = http.createServer(function(req, res) {

  res.writeHead(200, { 'content-type': 'text/plain' })

  var file = fs.createReadStream(filePath, {encoding: 'utf8'});
  file.pipe(res);

});

server.listen(portNum);
console.log('app listening on port: ', portNum);