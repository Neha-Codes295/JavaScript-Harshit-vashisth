// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%

// fxn can return fxns

function outerfunc(){
    function innerfunc(){
        console.log("hello");
    }

    return innerfunc;
    // return "one";
    // return 1;
    // return [1,2,3];
    return {a: "1"};
}

console.log(outerfunc());


function pritFullname(fname, lname){
    function printName(){
        console.log(fname, lname);
    }

    return printName;
}

const ans = pritFullname("Neha", "Bhatia");
// console.log(ans);
ans();