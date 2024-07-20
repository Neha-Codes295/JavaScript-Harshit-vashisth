const userMethods = {
    about : function(){  
        return `${this.firstName} is ${this.age} years old,`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return 'toon na na na la la'
    }
}

function createUser(firstName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.sing = userMethods.sing;
    // see file 80 and comeback

    // maanlo mujhe bhot saare methods add krne h to mujhe hr fxn mei baar baar ye likhna pdega
    
    return user;
}

const user1 = createUser('neha', '22141@iiitu.ac.in', 20, "my address");
const user2 = createUser('naina', '22141@iiitu.ac.in', 20, "my address");
const user3 = createUser('nikki', '22141@iiitu.ac.in', 20, "my address");

console.log(user1.about());
console.log(user3.is18());
console.log(user2.sing());

// after seeing file 80
console.log(user1);