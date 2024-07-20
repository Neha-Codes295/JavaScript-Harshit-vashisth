// arrow functions
const user1 = {
    firstName : "neha",
    age: 20,
    // about: function(){
    //     console.log(this.firstName, this.about);
    // }
    about: () => {
        console.group(this);
        console.log(this.firstName, this.about);
    }
}
user1.about();
user1.about(user1);