

module.exports =  function(array,callback){
    var b=new Array();
    for(var i=0,cnt=0;i<array.length;i+=2,cnt++){
        b[cnt] = array[i];
    }
    callback(b);
 }

/*
var array = [1,1,1];
test側
oddFilter(array,function(i){
    console.log(i);
})=[3,1,3]
i: array[0],array[2]
Filter側
 */