// trim(): to remove spaces
// toUpperCase()
// toLowerCase()
// SecurityPolicyViolationEvent(): sirf kuch particular char chaahiye

let firstName = "   neha   ";
console.log(firstName); 
console.log(firstName.length);

firstName.trim(); // "neha" //pr firstName to same hi rhega

let newString = firstName.trim(); 
console.log(newString); 
console.log(newString.length);


firstName = firstName.toUpperCase()
console.log(firstName); 


console.log(firstName.toLowerCase()); 


// start index : include
// end index : exclude
let string  = newString.slice(1,3);
console.log(string);