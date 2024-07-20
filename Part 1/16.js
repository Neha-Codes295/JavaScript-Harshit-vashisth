// and or operator

let firstName = "Neha";
let age = 20;

// if(firstName[0] === "N"){
//     console.log("name start with 'N'");
// }
// if(age>18){
//     console.log("age is above '18'");
// }

// or 

if(firstName[0] === "N" && age>18){
    console.log("name start with 'N' and above '18'");
} else{
    console.log("inside else");
}
// dono true honi chahiye to hi if block chelgi


if(firstName[0] === "A" || age>18){
    console.log("inside if");
} else{
    console.log("inside else");
}
// koi ek to true honi hi chahiye taaki if chle