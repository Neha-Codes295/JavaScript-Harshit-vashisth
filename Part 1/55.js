// function returning function

function myFunc(){
    // return "a";
    // return [1,2,3];
    // return {name:"harshit", age:22};

    // fxn returning fxn
    // function hello(){
    //     return "hello world";
    // }
    // return hello;

    return function(){
        return "hello world";
    }
}

// console.log(myFunc());

const ans = myFunc();
// ans();
console.log(ans());