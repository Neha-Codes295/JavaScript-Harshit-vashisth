const user1 = {
    firstName : "Neha",
    age: 20,
    about: function(){
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake
user1.about();

// const myFunc = user1.about;
// yaha pr sirf reference store hui h bind nhi hua h

const myFunc = user1.about.bind(user1);
myFunc();