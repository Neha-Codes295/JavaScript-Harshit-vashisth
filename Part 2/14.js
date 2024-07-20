// select elt using query selector

// const mainHead = document.getElementById("main-heading");
const mainHead = document.querySelector("#main-heading");
console.log(mainHead);
const header = document.querySelector(".header");
console.log(header);
// const nav = document.querySelector(".nav-item");
// 1st vala hi milega sirf
const nav = document.querySelectorAll(".nav-item");
// sare mil jayenge as Node List
console.log(nav);

// query selector hr cheex k liye kaam krega