// if else condition

let age = 17;
if(age>18){
    console.log("User can Vote.");
} else{
    console.log("User can't Vote.");
}

let n = 19;
if(n%2 == 0){
    console.log("Even");
}else{
    console.log("Odd");
}


// falsy values:
// false
// ""
// null
// undefined
// 0

// let firstName =  "";
// let firstName;
// let firstName = null;
// let firstName = undefined;
// let firstName = 0;
let firstName = false;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");
}


// truthy
// "abc"
// 1, -1