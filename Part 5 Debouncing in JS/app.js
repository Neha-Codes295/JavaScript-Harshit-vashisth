// console.log("hi");
// const myInput = document.getElementById("input-event");
// console.log(myInput);

// // keyup
// // input
// // change
// // keypress
// // keydown


// // myInput.addEventListener("keyup", ()=>{
// //     // console.log("fxn called");
// //     console.log(myInput.value);
// // });

// // myInput.addEventListener("input", ()=>{
// //     console.log("fxn called");
// //     console.log(myInput.value);
// //     console.log(myInput);
// // });

// // input is better than keyup

// // myInput.addEventListener("change", ()=>{
// //     console.log("fxn called");
// //     console.log(myInput.value);
// // });
// // jb sb likh lenege or box k bahr click krenge tb console mei print hoga

// function findSuggestions(e){
//     console.log("suggestions for ", e.target.value);
// }

// // myInput.addEventListener("input", (e)=>{
//     //     console.log(myInput.value);
// //     console.log(e.target.value);
// // });

// myInput.addEventListener("input", findSuggestions);





// // decorator fxn takes fxn and return fxn
// function decorator(func){
//         return function(...args){
//                 console.log(args);
//                 console.log("decor fxn", func.name);
//                 func.call(this, ...args);
//             }
//         }
        
//         function hello(){
//         console.log("hello world");
//     }
    
// function hi(name){
//     console.log("hi", name);
// }

// const fxn = decorator(hello);
// fxn();

// // hi("Naina");
// const fcn = decorator(hi);
// fcn("Naina");





function debounce(func, delay){
    let timeoutId;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            funx.call(this, ...args);
        }, delay);
    };
}

const myInput = document.getElementById("input-event");

function findSuggestions(e){
    console.log("suggestions for ", e.target.value);
}
        
const dfsFunc = debounce(findSuggestions, 300);

myInput.addEventListener("input", dfsFunc);