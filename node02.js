var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var separated = str.split("\n");
//console.log(separated);
console.log(separated.length-1);