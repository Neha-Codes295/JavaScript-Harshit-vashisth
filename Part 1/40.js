// spread operator
const array1 = [1,2,3];
const array2 = [5,6,7];

// spread operator in case of array
// const newArray = [...array1, array2, 89, 69];
// const newArray = [..."abc"];
const newArray = [..."1234"];
console.log(newArray);


// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
    key1: "value100",
    // agr duplicate keys h to baad vali hi use krenge
}
// console.log(obj1);

const obj2 = {
    key1: "valueunique",
    key3: "value3",
    key4: "value4",
}

// const newObject = {...obj1, ...obj2, key69: "value69"}
// const newObject = {..."abcdefghijklmnopqrstuvwxyz"}; //with indexing
// const newObject = {...["item1", "item2", "item3"]}; 
const newObject = {..."1234"}; 
console.log(newObject);