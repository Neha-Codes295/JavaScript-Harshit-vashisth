// filter method
// to filter from array

// ab maanlo even num filter krne h mujhe array mei se
const num = [1,2,6,4,9];
const isEven = function(num){
    return num%2 == 0;
}
const evennum = num.filter(isEven);
console.log(evennum)
// filter fxn always return krta h true ya false