// callback function: fxn as argument leta h koi fxn to vo hota h cb fxn

console.log('hello world');
function myFunc(a){
    console.log(a);
}

// jo bhi myFunc ke andr value h vo 'a' ko assign ho jayegi
myFunc("abc"); //string
myFunc([1,2,3]); //array
myFunc({name: "neha"}); //object

// but kya a ki vale ek function ho skti h!!! let's see
function MyFunction(name){
    console.log("inside new Function");
    console.log(`name is ${name}`);
}
function myFunction(callback){
    // sql query (database mei use krte h is callback fxn ko)
    // const data = {}; 
    // aise krke kuch, baad mei use krenege

    console.log(`hello there`);
    callback("Neha");
    // callback likhna is just a convention but we can write anything 
}

myFunction(MyFunction);
// yes, ab 'a' ek function h, isko hi bolte h callback fxn