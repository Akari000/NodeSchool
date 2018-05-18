var http = require("http");

var url = process.argv[2];
//console.log(http);
//console.log(url);

http.get(url,function(res){
    res.setEncoding("utf8");
    res.on("data",function(data){
        console.log(data);
    });
    res.on("end",function(){});
});

//on()の使い方
//非同期処理とは
