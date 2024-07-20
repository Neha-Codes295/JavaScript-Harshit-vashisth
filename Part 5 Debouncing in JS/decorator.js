// decorator fxn takes fxn and return fxn
function decorator(func){
    return function(...args){
        console.log(args);
        console.log("decor fxn", func.name);
        func.call(this, ...args);
    }
}

function hello(){
    console.log("hello world");
}

function hi(name){
    console.log("hi", name);
}

const fxn = decorator(hello);
fxn();

// hi("Naina");
const fcn = decorator(hi);
fcn("Naina");