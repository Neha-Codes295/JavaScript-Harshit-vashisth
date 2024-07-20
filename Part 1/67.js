// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only(no duplicates allowed)********

// const num = [1,2,4];
const numbers = new Set([1,2,3,3]);
// 3 ek baar hi apeear hoga
console.log(numbers);
console.log(numbers[2]); //undefined cz index-based access hi nhi h yaha pe

// const str = new Set(["abc", "neha"]);
const str = new Set("abc");
console.log(str);

const num = new Set();
// mostly empty shod dete h, when we use set, then add krte h values
num.add(1);
num.add(2);
num.add(str);
// num.add(str); //this is duplicating
num.add(['item1', 'item2']);
num.add(['item1', 'item2']); //this is not duplicate cz ye diff arr h

if(num.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}
console.log(num);

// for(let n of num){
//     console.log(n);
// }


const myArray = [1,2,3,3,4,6,6,6];
const uniqElt = new Set(myArray);
console.log(myArray);
console.log(uniqElt);

// console.log(uniqElt.length);
// length prop use nhi kr skte h to undefined aayega ans

let lnt = 0;
for(elt of uniqElt){
    lnt++;
}
console.log(lnt); //unique