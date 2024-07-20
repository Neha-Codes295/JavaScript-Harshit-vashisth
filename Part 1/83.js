// // new keyword
// function createUser(firstname, age){
//     this.firstname = firstname;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstname, this.age);
// }
// const user1 = new createUser("neha", 20);

// // new: 
// // ek to empty object this = {} bna rha h
// // or ye fir return this kr ra h
// // also jo kaam hm krte the manually, vo new keyword khud kr dega i.e. ko prototype ki chain bnane ka , in the console i.e. 
// // Object.create(createUser.prototype);

// console.log(user1);
// user1.about();


// __proto__ (in firefox) or [[prototype]] (in other browser)


// constructor fxn
function CreateUser(firstName, email, age, address){
    const user = Object.create(createUser.prototype); //
    this.firstName = firstName;
    this.email = email;
    this.age = age;
    this.address = address;
}
// agr hm aisa fxn bna re h jisme new keyword use krenge to us fxn ka naam capital letter se start krte h
console.log(CreateUser.prototype);
CreateUser.prototype.about = function(){  
    return `${this.firstName} is ${this.age} years old,`;
},
CreateUser.prototype.is18 = function(){
        return this.age >= 18;
    },
CreateUser.prototype.sing = function(){
    return 'ta na na la la';
}

const user1 = new CreateUser('neha', '22141@iiitu.ac.in', 20, "my address");
const user2 = new CreateUser('naina', '22141@iiitu.ac.in', 20, "my address");
const user3 = new CreateUser('nikki', '22141@iiitu.ac.in', 20, "my address");

console.log(user1);
console.log(user1.is18());

// baaki 84 file mei dekhte h