// iterables
// jispe hum for of loop lga ske
// string, array are iterable

const firstName = "Neha";
for(let char of firstName){
    console.log(char);
} //string

const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
} //array


// const users = {'key1':'value1', 'key2':'value2'}
// for(let user of users){
//     console.lof(user);
// } //object
// as ye ek object h to iterable nhi h


// arry like object
// jinke pass length prop hoti h
// aur jinko hum index se access kr skte h
// exapmle :- string

const Name = "neha";
console.log(Name.length);
console.log(Name[3]);