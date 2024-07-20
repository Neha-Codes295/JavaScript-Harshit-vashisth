// use const for creating array

const pi = 3.14;
console.log(pi);
// pi = 12;  // const ki value change nhi ho skti h
// console.log(pi);

const fruits  = ["apple", "mango"];
console.log(fruits);
fruits.push("banana");
// or yha fruits ek arr h jisme heap memory ka ek address store h, jisme values h

// fruits = ["grapes", "pineapple"];
// but agr kuch aisa krenge tb vo change nhi ho skta h
// but incase const ki jgh let fruits hota to we can do change our arr

// const use krna is a good practice
console.log(fruits);