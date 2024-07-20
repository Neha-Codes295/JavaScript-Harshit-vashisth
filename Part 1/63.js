// some method


// kya ek bhi num aisa h jo even h
const numbers = [2,4,5,7,0];
const ans = numbers.some((number) => number%2 === 0);
console.log(ans);
// returns true cz even num to h array m


const userCart =[
    {Pid:1, Pname: "phone", Price: 10000},
    {Pid:2, Pname: "iphone", Price: 25000},
    {Pid:3, Pname: "tv", Price: 15000},
]
const sol = userCart.some((cartItem) => cartItem.Price > 10000000);
console.log(sol);