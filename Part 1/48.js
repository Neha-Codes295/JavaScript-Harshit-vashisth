// functions inside function
const app = () => {
    const myFunc = () =>{
        console.log("fxn inside app");
    }
    const addTwo = (n1, n2) => {
        return n1 + n2;
    }
    console.log("inside app");
    myFunc();
    console.log(addTwo(1,5));
}
app();