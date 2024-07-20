// nested destructuring
const users = [
    {userId:1, firstName:'Neha', gender:'female'},
    {userId:2, firstName:'Naina', gender:'female'},
    {userId:3, firstName:'Nikki', gender:'female'},
]

// const[user1, user2, user3] = users;
// console.log(users);
// console.log(user1);

// destructure krdia to get particular chheze 
const[{firstName, userId}, , {gender: user3Gender}] = users;
console.log(firstName);
console.log(userId);
console.log(user3Gender);