// splice method: to dlt or insert elt in arr
// start, delete, insert

const myArray = ['item1', 'item2', 'item3'];

// delete
// const delItem = myArray.splice(1, 2);
// console.log("del item is", delItem);
// console.log(myArray);

// insert
// myArray.splice(1,0,'inserted Item');
// console.log(myArray);

// del & insert saath mei
myArray.splice(1,2, "ins item1", "ins item2");
console.log(myArray);