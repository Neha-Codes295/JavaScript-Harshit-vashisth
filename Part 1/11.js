// undefined: jb var bna to doge pr usme koi value assign ni kroge
// pr const k case mei to value dni hi pdegi
// var firstname;
// console.log(typeof firstname);
let firstName;
console.log(typeof firstName);
firstName = "Neha";
console.log(typeof firstName);


// null: kuch nhi
let myVar = null;
console.log(myVar);
myVar = "neha"
console.log(myVar, typeof myVar);

console.log(typeof null) //gives output 'object'  //this is a bug/error/glti in javascript


// BigInt
let number = 123;
console.log(number);

console.log(Number.MAX_SAFE_INTEGER);

// number ko BigInt bnane k ways
let mynumber = BigInt(11223333445555666677788890000000);
console.log(mynumber);

let num = BigInt(12);
let samenum = 123n;
console.log(num + samenum);
// console.log(num + number);
// BigInt ko BigInt k saath hi operate kr skte h