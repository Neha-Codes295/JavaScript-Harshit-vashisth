// sort method
// ASCII TABLE 
// char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// 'A' : 65
// ...
// 'Z' : 90

// 'a' : 97
// ...
// 'z' : 122


// sort : 5, 2874, 5783, 2198, 3598

// baaki method to nya array bna rhe the nd original mei koi change nhi kr rhe the
// but sort original array mei hi change krta h

const num = [5, 2874, 5783, 2198, 3598];
num.sort();
console.log(num);
// it will give wrong result as JavaScript isko number smjh kr nhi blki string smjh kr sort kr ra h
// or string ko sort krne k liye, ascii code use kiya jata h, 1st char ka compare krenge, then 2nd and so on...agr koi starting mei h shota hua to vo phle ayega
// ye to tha sort ka nuksaan

// but iska faida h ki strings ko ye dictionary jaise sort krta h
const str = ['neha', 'abc', 'naina', 'nannu', 'AB', "Neha"];
str.sort();
console.log(str);
// agr capitals h to vo phle aayenge cz of ascii code


const nums= [5, 2874, 5783, 2198, 3598];
// nums.sort((a,b) => {
//     return a-b;
// });
// or
nums.sort((a,b) => a-b );  //ascending order, if b-a krenge to descending order aayega
console.log(nums);
// ab hogya h sort
// if a-b --> positive then b ko phle rkho and a ko baadme 
// agr negative aaya to ulta krdo


// price low to high sort kro
const products = [
    {pId : 1, pName : "P1", price : 300},
    {pId : 2, pName : "P2", price : 500},
    {pId : 3, pName : "P3", price : 400},
]
const lowToHigh = products.slice(0).sort((a,b) => {
    return a.price - b.price;
});
console.log(lowToHigh);

const HighToLow = products.slice(0).sort((a,b) => {
    return b.price - a.price;
});
console.log(HighToLow);