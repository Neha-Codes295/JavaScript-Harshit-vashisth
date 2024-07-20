// 3rd file dekho then yaha aao
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(element){
            element.textContent = text;
            element.style.color = color;
            resolve();
        }else{
            reject();
        }
    }, time);
})
}
// this fxn will now return promise

// const returnedPromise = changeText(heading1, "one", "red", 1000);
// // console.log(returnedPromise);
// returnedPromise.then(()=>{
//     return changeText(heading2, "two", "blue", 1000);
// })
// or

changeText(heading1, "one", "red", 1000)
    .then(()=>{
        // changeText(heading2, "two", "blue", 1000)
        // pr aise to 2,3,4 sb ek saath honge , 1sec ka delay nhi aayega
        // so u need to write return so as to get the desired output
        return changeText(heading2, "two", "blue", 1000)
    })
    .then(()=>{return changeText(heading3, "three", "red", 1000)})
    .then(()=>{return changeText(heading4, "four", "blue", 1000)})
    .catch((error)=>{
        alert(error);
    })