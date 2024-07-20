// array destructuring

const myArray = ["value1", "value2", "value3"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1:", myvar1);
// console.log("value of myvar2:", myvar2);

// shortcut
// phli value 1st index ko...so on but agr extra elt h to unko ignore kr dia jayega
// agr myArray mei hi km values h to baaki variables undefined likh kr aayenge console mei

let[myvar1, myvar2] = myArray;
// agr 2nd elt ki value 3rd variable ko deni h ..to [myvar1, , myvar2]

myvar1 = "value changed"
// but agr let ki jgh const likhte to change nhi kr skte the hm

console.log("value of myvar1:", myvar1);
console.log("value of myvar2:", myvar2);

// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log(myNewArray);