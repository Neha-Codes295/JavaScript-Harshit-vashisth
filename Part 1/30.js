// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];
let fruits2 = [];
let n = fruits.length;
for(let i=0;i<n;i++){
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);

// length is the most imp prop of arr
console.log(fruits.length);
console.log(fruits[fruits.length-1]);