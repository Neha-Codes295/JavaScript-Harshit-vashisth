let num = [1,2,3];

// let num = new Array(1,2,3);
// // javascript ye krta h
// console.log(Array.prototype);

// num.
// prototype
// prototype --> fxn

console.log(Object.getPrototypeOf(num));
console.log(num);
// iska prototype bhi array h


function hello(){
    console.log("hello");
}
console.log(hello.prototype);
// iska prototype ek obj h
// pr hmei maanlo usko ek arr bnana h to..
hello.prototype = [];
console.log(hello.prototype);