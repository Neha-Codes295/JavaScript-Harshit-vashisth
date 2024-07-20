// same method in subclass

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

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`;
    }
    eat(){
        return `Modified Eat : ${this.name} is eating`
    }
}   

const tommy = new Dog("tommy", 3, 45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());
// sbswe phle to dog ki class hi check hogi, agr vaha nhi h to vo move hoga animal class pr