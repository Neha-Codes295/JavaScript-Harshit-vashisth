const userMethods = {
    about : function(){  
        return `${this.firstName} is ${this.age} years old,`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(firstName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = function(){  
    //     return `${this.firstName} is ${this.age} years old,`;
    // },
    // user.is18 = function(){
    //     return this.age >= 18;
    // }

    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('neha', '22141@iiitu.ac.in', 20, "my address");
const user2 = createUser('naina', '22141@iiitu.ac.in', 20, "my address");
const user3 = createUser('nikki', '22141@iiitu.ac.in', 20, "my address");
// jitne users (objects) bnte jaayenge utne hi baar 2 methods memory mei create hote rhenge(is18, about)
// but hr ek object k liye in methods ka ek baar hona hi kaafi h

// to ab fxn mei se hta kr in methods ko alg se bna dete h

console.log(user1.about());
console.log(user3.about());

// but yaha bhi glti h, next file mei dekhte h