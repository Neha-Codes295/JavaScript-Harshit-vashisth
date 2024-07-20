// intro to arrays
// ordered collection of elts/items

// reference type
// isliye array is called an object in javascript

// how to create arrays
let fruits = ["apple", "mango", "grapes"];
console.log(fruits); // sb print honge
console.log(fruits[2]); // particular bhi print kr skte h
// change bhi kr skte h elts ko
fruits[1] = "banana";
console.log(fruits);

let numebrs = [1,2,3,4];
console.log(numebrs);
let mixed = [1,2.6, "string", null, undefined];
console.log(mixed);

let obj = {}; // called as object literal

// type bhi check kr skte h array ka
console.log(typeof fruits);
console.log(typeof obj);

// to check of array h ya nhi
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

// array indexing