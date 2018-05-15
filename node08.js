var http = require('http');
var bl = require('bl');

var urls = [process.argv[2],process.argv[3]];

function getHttp(url){
    http.get(ulr,function(res){
        var body = "";
        res.setEncoding("utf8");
        res.on("data",function(chunk){//dataイベントに対するイベントハンドラー
            body += chunk;
        })

        res.on("end",function(){
            console.log(body);
        })
        
    }).on("error",function(e){
        console.log(e.message);
    })
}


for(var i=2;i<urls.length;i++){
    //１つのurlにgetリクエストして値を出力する
    //console.log(urls[i]);
    getHttp(urls[i]);
}
/*
//三つが終わったらconsole.log

カウンタ
chunk パケット


*/