// default parameters

// function addNum(a,b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     return a+b;
// }
// or
function addNum(a,b=0){
    return a+b;
}
// const ans = addNum(4,5);
const ans = addNum(4);
console.log(ans);