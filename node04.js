var fs = require('fs');
var path = require('path');

var dir = process.argv[2];// node04.js dir ext
var ext = process.argv[3];

fs.readdir(dir, function(err,filelist){
    if(err){
        return console.log(err);
    }
    filelist.forEach(function(file){        //filelistから一つづつ取り出す(for文と同じ)
        if(path.extname(file) === "." + ext){
            console.log(file);
        }
    });
});
//console.log("dir:" + dir);
//console.log("ext:" + ext);

