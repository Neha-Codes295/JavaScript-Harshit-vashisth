// array push pop

// array shift unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push ---> arr k last mei add krega elt ko
fruits.push("banana");
console.log(fruits);

// pop ---> arr k end se remove krega elt ko
let poppedFruit = fruits.pop();
console.log(fruits);

console.log(`popped fruit is ${poppedFruit}`);


// unshift ---> arr k starting mei hi elt add ho jayega
fruits.unshift("banana");
fruits.unshift("newfruit");
console.log(fruits);

// shift ---> starting se elt ko remove krega
let removedFruit = fruits.shift();
console.log(fruits);
console.log(" removed fruit is",removedFruit);


// push pop fast h as compared to shift unshift