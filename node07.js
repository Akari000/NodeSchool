var http = require('http');

var url = process.argv[2];
var bl = require('bl');

http.get(url,function(response){
    response.pipe(bl(function(err,data){
        if(err) return console.log(err);
        data=data.toString();
        console.log(data.length);
        console.log(data);
    }));
});


