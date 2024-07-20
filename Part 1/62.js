// every method


// to check sare elt evn h kya

const num = [2,4,6,8,9];
function isEven(number){
    return number % 2 === 0;
}
const ans = num.every(isEven);

// cb fxn --> true/false(boolean)
// every method --> true/false(boolean)

console.log(ans);


// to check sbka price 30k se km h kya!?
const userCart =[
    {Pid:1, Pname: "phone", Price: 10000},
    {Pid:2, Pname: "iphone", Price: 25000},
    {Pid:3, Pname: "tv", Price: 15000},
]
const sol = userCart.every((cartItem) => cartItem.Price < 30000);
console.log(sol);