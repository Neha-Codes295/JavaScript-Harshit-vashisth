// clone using Object.assign

// memory

const obj = {
    key1: "value1",
    key2: "value2",
}
// const obj2 = obj;
// obj.key3 = "value3";
// dono mei hi add hogi key3 cz ye same memory address pr h 

// but cloning aise bhi kr skte h 
// const obj2 = {...obj};
const obj2 = Object.assign({}, obj);
obj.key3 = "value3";
// sirf obj mei add hogi key3 cz spread operator use kiya h
console.log(obj);
console.log(obj2);