// Basics of Functions
// Functions: jo chaaho vo kaam krva skte h inse
// Funstion Declaration


// console.log("happy birthday to you....");
// console.log("happy birthday to you....");
// console.log("happy birthday to you....");


function singHappyBday(){
    console.log("happy birthday to you....");
}
singHappyBday();
singHappyBday(); //function call / invoke / run

// function twoPlusFour(){
//     return 2+4;
// }
// console.log(twoPlusFour());

function sumnum(n1, n2){
    return n1 + n2;
}
console.log(sumnum(4,6));

// console.log(sumnum(4+6)); //NaN: Not a Number


// num is even or not
// input: 1 num
// output: T / F
function isEven(n){
    // if(n%2 == 0){
    //     return true;
    // }else{
    //     return false;
    // }

    return n % 2 == 0;
}
console.log(isEven(4));
console.log(isEven(5));


// fxn
// input: string
// output: firstChar
function firstChar(string){
    return string[0];
}
console.log(firstChar("Radha"));


// fxn
// input: array, target(number)
// output: inddex of target if target present in array
function findTarget(array, n){
    for(let i = 0 ;i<array.length;i++){
        if(array[i] == n){
            return i
        }
    }
    return -1;
}
const myArray = [1,5,2,9];
console.log(findTarget(myArray , 2));
console.log(findTarget(myArray , 12));