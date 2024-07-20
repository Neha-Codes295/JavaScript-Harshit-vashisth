// Computed Properties

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }
// to do this


// const obj = {
//     [key1] : value1, //computed prop
//     [key2] : value2,
// }
// or 

const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);