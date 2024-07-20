// this keyword
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", function(){
    console.log("you clicked me!!!!");
    console.log("value of this");
    console.log(this);
})

// arrow fxn mei this ki value hogi window and normal fxn mei this ki value hogi vo fxn khud