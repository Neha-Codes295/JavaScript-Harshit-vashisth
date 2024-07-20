// keypress event
// khin pr bhi press kru to console mei o/p ho jayega

// mouseover event


// const body = document.body;
// body.addEventListener("keypress", (e) => {
//     // console.log(e);
//     console.log(e.key);
// });


const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
mainButton.addEventListener("mouseover" , () => {
    console.log("mouseover event occur");
});
mainButton.addEventListener("mouseleave" , () => {
    console.log("mouseleave event occur");
});