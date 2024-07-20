// important array methods

// forEach
// map
// filter
// reduce

const numbers = [4,6,5,8];

function mulBY2(number, index){
    console.log("index is", index);
    console.log(`${number} * 2 = ${number*2}`);
}

// mulBY2(numbers[0], 3);
// same value of i bhi de skt eh or alg bhi

// for(let i=0; i<numbers.length;i++){
//     mulBY2(numbers[i], i);
// }
// or

numbers.forEach(mulBY2);  // it takes fxn as input i.e. callback fxn
// loop lgane ki zrurt hi nhi rhi or kaam bhi hogya


// or alg se nhi krna to fxn ko bhi vahi bna skte h
// numbers.forEach(function(number, index){
//     console.log("index is", index);
//     console.log(`${number} * 2 = ${number*2}`);
// });


// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// });



const users = [
    {firstName: "neha", age:20},
    {firstName: "naina", age:20},
    {firstName: "nannu", age:20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// for(let user of users){
//     console.log(user.firstName);
// }

users.forEach((user, index) =>{
    console.log(user.firstName, index);
});