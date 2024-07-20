// objects: reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// key is also called as property of object
// objects don't have index


// how to create objects
// const person = {name:"Neha", age:20};  //key:value pair
const person = {
    name:"Neha",
    age:20,
    hobbies: ["guitar", "music", "shayari"]

};
console.log(person); //object literal
console.log(typeof person);


// how to access data from objects
console.log(person.name);
console.log(person.age);
// object k andr array bhi store kr skte h
console.log(person.hobbies);

// or

console.log(person["name"]);
console.log(person["age"]);


// how to add key value pair to objects
person.gender = "female";
console.log(person);