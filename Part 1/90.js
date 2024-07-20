// getter and setters
class Person{
    constructor(firstName,LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    // fullName(){
    //     return `${this.firstName} ${this.LastName}`;
    // }

    get fullName(){
        return `${this.firstName} ${this.LastName}`;
    }

    setName(firstName, LastName){
        this.firstName= firstName;
        this.LastName = LastName;
    }

    set fullName(fullName){
        // fullName.split(" ")
        // [naina, bhatia]

        // destructure krte h
        const [firstName, LastName] = fullName.split(" ");
        this.firstName= firstName;
        this.LastName = LastName;
    }
}

const P1 = new Person("neha","bhatia", 20);
console.log(P1);
// console.log(P1.fullName());
// ab fxn mei get lga kr likhenge to chlega nichhe vala using get

console.log(P1.fullName);
// ab fullName ek property bn jayega phle fxn tha

console.log(P1.firstName);
console.log(P1.LastName);

// P1.firstName = "naina";
// P1.LastName = "bhatia";
// or 
P1.setName("Naina", "bhatia");
console.log(P1.firstName);
console.log(P1.LastName);


// pr now i want ki mai naam ikath likhu and vo khud usme se first, last name nikaal le, kuch aisi prop bnau
P1.fullName = "neha nannu";
console.log(P1);
console.log(P1.fullName);