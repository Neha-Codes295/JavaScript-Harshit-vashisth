function CreateUser(firstName, email, age, address){
    const user = Object.create(CreateUser.prototype); //
    this.firstName = firstName;
    this.email = email;
    this.age = age;
    this.address = address;
}
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

for(let key in user1){
    // console.log(key);
    // user1.hasOwnProperty(key);

    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}