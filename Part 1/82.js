// const userMethods = {
//     about : function(){  
//         return `${this.firstName} is ${this.age} years old,`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return 'toon na na na la la'
//     }
// }

function createUser(firstName, email, age, address){
    const user = Object.create(createUser.prototype); //
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    user.address = address;    
    return user;
}

console.log(createUser.prototype);
// ab yaha bhi hmei free ka prototype mila h
createUser.prototype.about = function(){  
    return `${this.firstName} is ${this.age} years old,`;
},
createUser.prototype.is18 = function(){
        return this.age >= 18;
    },
createUser.prototype.sing = function(){
    return 'toon na na na la la';
}

const user1 = createUser('neha', '22141@iiitu.ac.in', 20, "my address");
const user2 = createUser('naina', '22141@iiitu.ac.in', 20, "my address");
const user3 = createUser('nikki', '22141@iiitu.ac.in', 20, "my address");

console.log(user1);
console.log(user1.about());
console.log(user1.sing());