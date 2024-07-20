// how to clone(copy) array but if we do change in 1 arr to vo dusre mei nhi hoga

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1 === array2); 

// clone bnane k treeke
// let array2 = ["item1", "item2"]; //clone //but this way isn't good

// let array2 = array1.slice(0); //clone bn gya

// let array2 = [].concat(array1); // ye bhi clone h, cz khali array mei concatenate krdia array1

// new way to make clone is using spread operator "..."
// let array2 = [...array1]; // this is best way to make clone


// ab concatenation krte h
// let array2 = array1.slice(0).concat(["item3", "item4"]);

// let array2 = [].concat(array1, ["item3", "item4"]);

// let array2 = [...array1, "item3", "item4"];

let oneMoreArr = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArr];

console.log(array1 === array2); 
array1.push("item3");
console.log(array1 === array2); 
console.log(array1);
console.log(array2);