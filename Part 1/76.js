// const user1 = {
//     firstName : "neha",
//     age: 20,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }
// }
// or

const user1 = {
    firstName : "neha",
    age: 20,
    about(){  //ye bn gya hmara method
        console.log(this.firstName, this.age);
    }
}
user1.about();