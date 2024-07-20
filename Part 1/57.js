// map method: bhot imp h bhot zada, react mei bhi use krte h isko
// ye bhi as input ek cb fxn leta h

const numbers = [3,6,4,8,9];

const sq = function(number){
    return number * number;
}

const sqNum = numbers.map(sq);
// ye map hmesha ka nya array bnayega or usme and aayega

console.log(sqNum);
// mao ke saath hmesha return hi use krna h fxn mei vrna undefined output aa skti h

// or simple krne k liye
const squareNum = numbers.map((number, index) =>{
    return `index: ${index} ${number * number}`;
});
console.log(squareNum);


const users = [
    {firstName: "neha", age:20},
    {firstName: "naina", age:20},
    {firstName: "nannu", age:20},
]
const userNames = users.map((user) => {
    return user.firstName;
});
console.log(userNames);