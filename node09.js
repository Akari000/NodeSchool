var net = require('net')
var port = process.argv[2];

function dateFormat(year,mon,date,h,min){
    var YYYY = ("0000" + year).slice(-4);
    var MM = ("00" + (mon+1)).slice(-2);
    var dd = ("00" + date).slice(-2);
    var hh = ("00" + h).slice(-2);
    var mm = ("00" + min).slice(-2);
    return `${YYYY}-${MM}-${dd} ${hh}:${mm}` //テンプレート文字列
}

function currentDate(){
    var date = new Date();
    var dateArray = [date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes()];
    return dateFormat.apply(null, dateArray);
}

//console.log(currentDate());

var server = net.createServer(function (socket) {
  // socket handling logic
  socket.write(currentDate() + "\n");//\nは終了の印（TCPのルール）
  socket.end();
})
server.listen(port)

//telnet
/*   
-h
--help
help
man OOO
curl -help

telnet localhost 8000
*/
