// get multiple elts using getELt by class name
// get multiple elts using querySelectorAll

const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);
// iska result hoga ek array like object
// i.e. a html collection

console.log(navItems[0]);
// console.log(navItems[1]);


const navItms = document.querySelectorAll(".nav-item");
console.log(navItms);
// ye bhi ek array like object hoga i.e.
// NodeList