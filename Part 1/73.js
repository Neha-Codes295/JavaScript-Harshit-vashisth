// call, apply, bind *** very imp in javascript

function hello(){
    console.log("hello world");
}
hello();
hello.call();

const user1 = {
    firstName : "neha",
    age : 20, 
    about : function(hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
    }
}

const user2 = {
    firstName : "naina",
    age : 20, 
}
user1.about();
user1.about.call(user2, "guitar", "Arijit Singh");
// user2 mei to func h hi nhi tb bhi can can call it by using user1 ka about func


// apply
user1.about.apply(user1, ["guitar", "ajju"]);


// bind: it returns a func
user1.about.apply(user1, ["guitar", "ajju"]);
const func = user1.about.bind(user2, "guitar","bach");
func();