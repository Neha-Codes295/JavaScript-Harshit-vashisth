// ab classes ki thodi practice kr lete h
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

const animal1 = new Animal("Tom", 1);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isCute());
console.log(animal1.isSuperCute());


// class Dog {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }   
// }
// pr dog class to same h animal class jaise so ...

class Dog extends Animal{

}
// here dog is the sub/derived class and animal is base/parent class

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.eat());