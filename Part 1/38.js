// how to iterate object

const person = {
    name:"Neha",
    age:20,
    "her hobbies": ["guitar", "music", "shayari"]
};

// two ways: for in loop, Object.keys

for(let key in person){
    // console.log(key);
    // console.log(person[key]);
    // console.log(person.key); // doesn't work 

    // console.log(`${key} : ${person[key]}`);
    console.log(key, " : ", person[key]);
}


// console.log(typeof (Object.keys(person)));
// const val = Array.isArray(Object.keys(person));
// console.log(val);


for(let key of Object.keys(person)){
    console.log(person[key]);
}