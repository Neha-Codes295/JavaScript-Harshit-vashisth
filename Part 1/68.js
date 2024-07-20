// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not alowed like objects


// difference between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key like array, num, string


// object literals
// key -> string
// key -> symbol
const person = {
    firstName : "neha", 
    age: 20,
    1: "one",
}
// console.log(person.firstName);
// console.log(person["firstName"]);
// comsole.log(person[1]); //not working

for(let key in person){
    // console.log(key);
    console.log(typeof key);
}


// map ko use krke key kisi bhi type ki rkh skte h, jbki obj mei key is a string only
// key value pair
const Person = new Map();
Person.set('firstName', 'Neha');
Person.set('age', '20');
Person.set(1, 'one');
Person.set([1,2,3], 'onetwothree');
Person.set({1: 'one'}, 'one');
console.log(Person);

// access k-v pair
console.log(Person.get('firstName'));
console.log(Person.get('age'));
// console.log(Person.get('1')); //undefined
console.log(Person.get(1));

// console.log(Person.keys());
// or
for(let key of Person.keys()){
    console.log(key, typeof key);
}

for(let [key, value] of Person){
    // console.log(key, typeof key);
    // console.log(Array.isArray(key));
    console.log(key,value);
}

// or map ko aise bhi bna skte h , arr k andr arr
const Maap = new Map([['firstName', 'Neha'], ['age', 7]]);
console.info(Maap);


// mujhe ek obj bnana h jiski info mujhe yaha nhi ek maap mei store krni h
const person1 = {
    id: 1,
    firstName: "neha",
}

const userInfo = new Map();
userInfo.set(person1, {age: 8, gender: "male"});
// console.log(userInfo);
console.log(person1.id);
console.log(userInfo.get(person1));
console.log(userInfo.get(person1).gender);