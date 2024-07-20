// synchronous programming vs asynchronous programming


// synchronous programming --- single threaded
// jitni abhi tk baat ki thi vo sari syn hi thi
// sb kuch synchronous way mei chlta h , jb tk phla kaam khtm nhi hoga, tb tk second start ni hoga

// console.log("script start");
// for(let i=1;i<10;i++){
//     console.log("inside a loop");
// }
// console.log("script end");


// async se phle ek fxn k baare mei jaante h
// setTimeout
console.log("script start");
function hello(){
    console.log("hello");
}
// pr if u'll see the o/p to hello end mei print hora h , cz this is async prog

// setTimeout(hello, 1000); 
// ye as input lega koi fxn and delay time of calling the fxn(1000ms i.e. 1sec in this case)
// or

const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 1000);

for(let i=0;i<5;i++){
    console.log("...");
}
console.log("setTimeout id is", id);

console.log("clearing time out");
// clearTimeout(id);
console.log("script end");