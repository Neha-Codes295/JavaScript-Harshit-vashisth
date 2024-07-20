// lexical scope
const myVar = "value100";
// myApp ka lexical environment h Gblobal Scope mtlb in total jo bhi h
function myApp(){
    const myVar = "value1";
    function myFunc(){
        // myFunc ka lexical environment h myApp
        const myVar = "value10";
        console.log("inside myFunc1", myVar);
        // agr apne fx mei variable h to priority usko dekr print kr lenge vo value, vrna out of fxn jo h usko krenge print
        // that is lexical environment mei check hoga phle, agr to vo scope mei h to print hoga vrna bahr dekhenge
    }
    
    const myFunc2 = function(){
        console.log("inside myFunc2", myVar)
    }
    myFunc2();

    const myFunc3 = () => {

    }
    
    console.log(myVar);
    myFunc();
}
myApp();