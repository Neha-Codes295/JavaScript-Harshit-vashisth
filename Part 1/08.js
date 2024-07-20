// typeof operator

// data types(primitive)
// string "harshit"
// number 2,4, 6.9
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 22;
let firstName = "Neha"
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof "7");
console.log(typeof 7);


// convert number to String
age = age + ""; // 22 -> "22"
console.log(typeof (age)); 


// convert string to Number
let myStr = +"34";
console.log(typeof myStr);

// or 

let Age = 18;
Age = String(Age);
console.log(typeof Age);

let Str = "18";
Str = Number(Str);
console.log(typeof Str);