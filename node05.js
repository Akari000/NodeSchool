//node node05.js dirName extention 
//print   one file per line  
//use  asynchronous I/O

//The module mustexport a single function
    //arguments:  directory name, filename extension string , callback function
// data will be your filtered list of files

//if resive err  call to "fs.readdir()"

var mymodule = require('./node05_sub.js');

var dir = process.argv[2];// node04.js dir ext
var ext = process.argv[3];

mymodule(dir,ext,function(err,filelist){
    if(err) return console.log(err);
    filelist.forEach (function(file){
        console.log(file);
    });
})

