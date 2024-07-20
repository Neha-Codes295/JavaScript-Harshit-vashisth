// get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://google.co.in");
console.log(link.getAttribute("href"));


const ipELt = document.querySelector(".form-todo input");
console.log(ipELt.getAttribute("type"));