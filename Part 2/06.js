// fxn execution context

let foo = "foo"
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Neha", "Bhatia");
console.log(personName);