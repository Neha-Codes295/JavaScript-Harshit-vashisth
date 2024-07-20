// arrow functions

// const singHappyBday = function(){
//     console.log("happy birthday to you....");
// }
const singHappyBday = () => {
    console.log("happy birthday to you....");
}
singHappyBday();


// const sumnum = function (n1, n2){
//     return n1 + n2;
// }
const sumnum = (n1, n2) => {
    return n1 + n2;
}
console.log(sumnum(1,2));


// const firstChar = function (string){
//     return string[0];
// }
// const firstChar = (string) =>{ 
const firstChar = string =>{  // age ek hi parameter h to brackets hta bhi skte h
    return string[0];
}
console.log(firstChar("Radha"));


const isEven = num => num%2 == 0;
console.log(isEven(6));