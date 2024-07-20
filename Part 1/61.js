// find method

const myArray = ["Hello", "cat", "dog", "me"];
function isLength3(string){
    return string.length ===3;
}

// const ans = isLength3("dog");
// const ans = isLength3("doggy");
// console.log(ans);

const ans = myArray.find(isLength3);
console.log(ans);
// jo bhi sbse phla elt hoga with length 3 vo print hoga
// agr koi h hi ni to undefined print hoga

// arrow fxn 
const sol =  myArray.find((string) => string.length ===3);
console.log(ans);


const users = [
    {userId: 1, userName: "neha"},
    {userId: 2, userName: "naina"},
    {userId: 3, userName: "ikka"},
    {userId: 4, userName: "taj"},
]
const myUser = users.find((user) => user.userId === 2);
console.log(myUser);