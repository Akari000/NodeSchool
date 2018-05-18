/* 配列の奇数番目に処理をする */
/*
var v = [1,2,3,4,5,6];

for(var i = 1;i< v.length;i+=2){
    v[i]*=v[i];
}
console.log(v);

v.forEach(function(i){
    if(i%2!==0){
        v[i]*=v[i];
    }
})
console.log(v);

*/

var array = [1,2,3,4,5];
var oddFilter = require('./oddFilter.js');
oddFilter(array,function(odd){
    
    console.log(odd);
});


//mymodule.apply(null, array);