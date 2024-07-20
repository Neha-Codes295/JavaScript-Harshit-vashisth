// difference between dot and bracket notation
const key = "email";
const person = {
    name:"Neha",
    age:20,
    // her hobbies: ["guitar", "music", "shayari"] //simple space daal kr likh kr error aayega
    "her hobbies": ["guitar", "music", "shayari"]
};

console.log(person["her hobbies"]);
// aisi prop k liye bracket lgana pdega

person[key] = "22141@iiitu.ac.in";
console.log(person);