// reduce method

const num = [1,2,3,4,5, 10];
// aim: sum of all num in array
const sum = num.reduce((accumulator, currenValue) => {
    return accumulator + currenValue;
});

// const sum = num.reduce((accumulator, currenValue) => {
//     return accumulator + currenValue;
// }, 100);
// hm chahe to yaha bhi de skte h acc ko value to cV 1 se start hogi vrna to niche tracking mei dekho
console.log(sum);

// chlo track krte h ki kaise aaya
// acc , cV , return
// 1      2      3
// 3      3      6  // jo last return ki value thi vo acc ko dedo and cV ko next value dedo
// 6      4      10
// 10     5      15
// 25     10     25


const userCart = [
    {PId:1, PName:"Phone", Price: 12000},
    {PId:2, PName:"iPhone", Price: 20000},
    {PId:3, PName:"aPhone", Price: 12000},
]
const totalAmt = userCart.reduce((TotalPrice, CurrentProduct) => {
    return TotalPrice + CurrentProduct.Price;
}, 0);
// acc ki value 0 h
console.log(totalAmt);