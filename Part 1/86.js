// 2015 / es6
// class keyword
// JS mei classes are fake kr internal kaam aise hi hora hhoga jo hmne yah CreateUser fxn bnakr kia h



// function CreateUser(firstName, email, age, address){
    //     const user = Object.create(CreateUser.prototype); //
//     this.firstName = firstName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     return this;
//     // yaha pr return this likhne ki zrurt nhi hoti h cz new keyword apne aap return kryta h
// }
// console.log(CreateUser.prototype);
// CreateUser.prototype.about = function(){  
    //     return `${this.firstName} is ${this.age} years old,`;
    // },
// CreateUser.prototype.is18 = function(){
    //         return this.age >= 18;
//     },
// CreateUser.prototype.sing = function(){
//     return 'ta na na la la';
// }


class CreateUser{
    constructor(firstName, email, age, address){
        console.log(`constructor called`);
        this.firstName = firstName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old,`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return 'ta na na la la';
    }
    func(a){
        console.log(a);
    }
}

const user1 = new CreateUser('neha', '22141@iiitu.ac.in', 20, "my address");
// new keword k bina obj create nhi kr skte h

const user2 = new CreateUser('naina', '22141@iiitu.ac.in', 20, "my address");
const user3 = new CreateUser('nikki', '22141@iiitu.ac.in', 20, "my address");

console.log(user1.firstName);
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));
user1.func("hi");