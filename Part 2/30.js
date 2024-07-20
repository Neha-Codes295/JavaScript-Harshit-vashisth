// intro to events
// is user click on a button, and we want some action/work to take place

// 3 ways to add an event
// onclick (internally button ko kaam de dia - check code in html file)

// class se kaam dena
// const btn  = document.querySelector(".btn-headline");
// console.log(btn);
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me again??");
// }
    
    
// method --- addEventListener
const btn  = document.querySelector(".btn-headline");
function clickMe(){
    console.log("you clicked me broooooo!!!!!!");
}
btn.addEventListener("click", clickMe);

// arrow fxn bhi bna skte h ya jaha clickMe likha h vaha bhi fxn define kr skte h