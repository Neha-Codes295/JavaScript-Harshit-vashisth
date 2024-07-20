// loop
// 3 ways:
// simple for loop , for of loop , forEach(this can't be used to iterate thru HTMLCollection)


// arr like object ---> indexing, length

const navItems = document.getElementsByTagName("a");
console.log(navItems);

// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }


// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItms = document.querySelectorAll(".nav-item");
// console.log(navItms); 


let navItms = document.querySelectorAll("a");
for(let navItem of navItems){
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "red";
    navItem.style.fontWeight = "bold";
}
confirm.log(navItms);