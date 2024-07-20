// static methods and properties
// getter and setters
class Person{
    constructor(firstName,LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    
    static classInfo(){
        return `this is person class`;
    }
    // this is a static methhod

    static desc = "static property";
    // static prop mei hmein object bnane ki zrurt ni h , direct call kr skte h apan

    get fullName(){
        return `${this.firstName} ${this.LastName}`;
    }
    set fullName(fullName){
        const [firstName, LastName] = fullName.split(" ");
        this.firstName= firstName;
        this.LastName = LastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }
}

const P1 = new Person("neha", "bhatia", 20);
console.log(P1.eat());
// P1.classInfo(); // this is not a fxn of P1
console.log(Person.classInfo());
// this is a static methhod

// aise hi static prop bhi hoti h
// console.log(P1.desc);
console.log(Person.desc);