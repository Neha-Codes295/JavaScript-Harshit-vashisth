// event bubbling / event propagation
// event capturing
// event delegation

// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// capturing events
child.addEventListener("click", () =>{
    console.log("capture !! child");
}, true)
parent.addEventListener("click", () =>{
    console.log("capture !! parent");
}, true)
grandparent.addEventListener("click", () =>{
    console.log("capture !! grandparent");
}, true)
document.body.addEventListener("click", () =>{
    console.log("capture !! document.body");
}, true)



// not capturing events or bubbling 
child.addEventListener("click", () =>{
    console.log("bubble child");
})
parent.addEventListener("click", () =>{
    console.log("bubble parent");
})

// agr parent ko click krungi to vahi aayega
// but agr child pr click krenge to dono aayenge

grandparent.addEventListener("click", () =>{
    console.log("bubble grandparent");
})
document.body.addEventListener("click", () =>{
    console.log("bubble document.body");
})


// event delegation
// grandparent.addEventListener("click", ()=>{
//     console.log("u clicked something!!!")
// })
grandparent.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
})