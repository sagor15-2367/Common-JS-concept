// array like object = arguments

function sum(a, b, c) {
    console.log(arguments[2]);
    const result = a + b + c;
    return result;
}
const total = sum(45, 55, 12, 22);
console.log(sum.length);

