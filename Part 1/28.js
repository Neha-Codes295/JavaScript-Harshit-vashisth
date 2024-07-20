// primitive and reference data types
let num1 = 6;
let num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);
num1++;
console.log(`results`);
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);
// num2 ki value change nhi hogi cz let primitive data type h 


// reference types
// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log(`results`);
console.log("array1", array1);
console.log("array2", array2);
// dono arr mei hi item3 add ho jayega


// Primitive type stack mei store hote h
// Reference type heap(address se khelte h yaha pr, ek memory type bnti h) mei store hote h