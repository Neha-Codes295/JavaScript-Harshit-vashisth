// hoisting

hello();
function hello(){
    console.log("hello world");
}
hello();
// Javascript mei ye possible h, c++ mei nhi and too fxn declaration mei, fxn expression mei nhi , na hi arrow fxn mei
// this is called hoisting

console.log(hii); // this is undefined
var hii = "hello world"; 
console.log(hii); // this will be printed to console