// param destructuring

// object
// react

const person = {
    firstName : "neha",
    gender : "female",
}

// function print(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
//     // jo h hi ni vo undefined print hoga
// }

// destructure krte h
function print({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

print(person);