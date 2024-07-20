const user = {
    firstName : "neha",
    age: 20,
    email: "22141@iiitu.ac.in",
    address: "House Number, Colony, Pincode, state",
    about(){  
        return `${this.firstName} is ${this.age} years old,`;
    },
    is18: function(){
        return this.age >= 18;
    }
}
// this is an object od name 'user'
const aboutUser = user.about();
console.log(aboutUser);

// if i want may users of same type , to uske liye alg alg se bnana is tds, to hum ek function bna denge jo ki input lega humse 
// fxn(that fxn create obj)
// then it adds key value pair
// object ko return krega

function createUser(firstName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){  
        return `${this.firstName} is ${this.age} years old,`;
    },
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('neha', '22141@iiitu.ac.in', 20, "my address");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);

// pr is code mei bhot kamiya h, chlo next file mei dekhte h