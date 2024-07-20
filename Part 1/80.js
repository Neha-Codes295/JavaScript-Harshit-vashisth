const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

// const obj2 = {
//     key3 : "value3",
// }
    
// const obj2 = {}
// or khaali obj bnane ka ek or treeka h

const obj2 = Object.create(obj1);
console.log(obj2);
// or aise bnane se ye *** problem bhi solve ho jayegi
    
// _ _proto_ _
// official ecmascript documentation
// [[prototype]]

// _ _proto_ _ or [[prototype]] are same things

// prototype 
// this is very different in javascript, it is a property in JS


obj2.key3 = "value3",
obj2.key4 = "value4";

console.log(obj1.key1);
console.log(obj2.key3);
console.log(obj2.key1); // this will be undefined as obj2 mei to sirf key3 h
// but i want ki agr obj2 k pass nhi h to obj1 k pass check ho, agr h to vo print krdo

console.log(obj2);

// this is happening
console.log(obj2.__proto__);
// obj1 ka samaan print hoga
// or
// console.log(obj2.[[prototype]]); //but this is not working in my lappy jbi documentation mei yahi likha hua h