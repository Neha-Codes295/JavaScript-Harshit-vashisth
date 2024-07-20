// optional chaining

const user = {
    firstNAme: "neha",
    // address: {houseNum : '1234'}
}
console.log(user.firstNAme);
console.log(user?.address);
// agr user exist krta h to uska address do
console.log(user?.address?.houseNum);
// agr user exist krta h to uska address do, agr address h to uska hhouse num do