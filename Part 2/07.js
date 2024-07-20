// lexical environment, scope chain

const LastName = "Bhatia";

const printName = function(){
    const firstName = "Neha";
    // console.log(firstName);
    // console.log(LastName);
    // or
    function muFunction(){
        console.log(firstName);
        console.log(LastName);
    }
    muFunction();
}
printName();