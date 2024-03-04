/**
 truthy
 1.true
 2.any number (+ve,_ve) will be truthy other then 0
 3.any string other then empty string
 4.'0','false'
 5.empty object {}

 falsy
 1.false
 2.0,
 3'' (empty string)
 4.undefined
 5.null

 */


const x=4;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


// option
const y=null;
if (!y){
    console.log('value is falsy');
}
const z={class:9};
if(!!x){
    console.log('value is truthy');
}