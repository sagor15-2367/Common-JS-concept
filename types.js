//strongly typed language
/**
 int a=5;
 string b='Sagor Alam';
 boolean b=true;
 object student ={
    name:'sagor',
    id:55
 }
 int[]numbers=['sagor','saon'];
 */

//javascript dynamic type language

// primitive value
const a = 5;
const b = 'sagor alam';
const d = true;

// maltuple value / non-primitive value
const ages = [45, 23, 35];
const student = { id: 23, class: 7 };
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
// console.log(x,y);
y = 7;
// console.log(x,y);
let p = { job: 'web developer' };
let q = p;
// q={job:'font developer'};
q.job = 'front end developer';
console.log(p, q);




