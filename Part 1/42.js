// objects inside array
// very useful in real world applications

const users = [
    {userId:1, firstName:'Neha', gender:'female'},
    {userId:2, firstName:'Naina', gender:'female'},
    {userId:3, firstName:'Nikki', gender:'female'},
]
// console.log(users);
for(let user of users){
    console.log(user);
    console.log(user.userId);
}