// 8 ways to get undefined
/**
 1.variable that is not initaialized will give undefined
2. function with no return
3.parameter that is not pass will be undefined
4.if return has nothing right site then return undefined
5.propertity decler not then undefined
6.accessing array element ar not attend 
7.deleting element show undefined
8.set a value directly undefined
 */

let first;

function second(a,b){
    const total=a+b;
}
const result=second();
// console.log(first);

function third(a,b,c,d){
    const total=a+b+c+d;
    console.log(a,b,c,d);
}
// console.log(result);
// third(2,4);

function noNegative(a,b){
    if(a<0||b<0){
        return
    }
    return a+b;
}
const total=noNegative(2,-5);
console.log(total);