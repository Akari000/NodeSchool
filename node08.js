var http = require('http');
//var bl = require('bl');

var urls = [process.argv[2],process.argv[3],process.argv[4]];
var count = 0;
var results = [];
function getHttp(url,index){
    http.get(url,function(res){
        var body = "";
        res.setEncoding("utf8");
        res.on("data",function(chunk){//dataイベントに対するイベントハンドラー
            body += chunk;
        })

        res.on("end",function(){
            results[index] = body;
            count=0;
            results.forEach(function(){
                count++;
            })
            //console.log(body);
            if(count===3){
                results.forEach(function(result){
                    console.log(result);
                })
            }
        })
    }).on("error",function(e){
        console.log(e.message);
    })
}


for(var i=0;i<urls.length;i++){
    //１つのurlにgetリクエストして値を出力する
    //console.log(urls[i]);
    getHttp(urls[i],i);

}
/* 
promiss
forEach 
タイプミス・・・色を見る
エラーが出なかったのはまず読み込んでなかったから！
chrom com + option
SHIFT + ENTER で改行
*/