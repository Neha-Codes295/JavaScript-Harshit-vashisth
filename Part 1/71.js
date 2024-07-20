// methods : functions inside object

// const person = {
//     firstName : "neha",
//     age : 20,
//     about: function(){
//         // console.log(`person name is ${this.firstName} and age is ${this.age}`);
//         console.log(this);
//     }
//     // this is an object in the fxn which is calling the fxn
// }
// person.about();


function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "neha",
    age : 20,
    about: personInfo,
}
const person2 = {
    firstName : "naina",
    age : 20,
    about: personInfo,
}
const person3 = {
    firstName : "nannu",
    age : 20,
    about: personInfo,
}
// personInfo();
person1.about();
person2.about();
person3.about();