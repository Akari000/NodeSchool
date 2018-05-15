var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function(err, data) {
    if(err){
        return console.log(err);
    }
    var result = data.toString().split("\n").length - 1;
    console.log(result);
});

//console.log("err:" + err);
//console.log("data:" + data);
//console.log("fs:" + fs);
//console.log("file:" + file);