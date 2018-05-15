var fs = require('fs');
var path = require('path');

module.exports = function (dir,ext,callback) {//モジュールのエクスポート
    fs.readdir(dir, function(err,filelist){
        if(err){
            return callback(err);
        }
        var files= [];
        for (var i in filelist){
            if(path.extname(filelist[i]) === "." + ext){
                files.push(filelist[i]);
            }
        }
        callback(null,files);
    });
}

