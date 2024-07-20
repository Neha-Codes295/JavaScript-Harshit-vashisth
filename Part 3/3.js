// callbacks , callback hell, pyramid of doom
// async prog

// console.log("hi");

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// setTimeout(() => {
//     heading1.textContent = "Heading 1"
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "Heading 2"
//         heading2.style.color = "red"
//     }, 1000);
// }, 1000);

// // setTimeout(() => {
// //     heading2.textContent = "Heading 2"
// //     heading2.style.color = "purple"
// // }, 2000);
// // this mthod can destroy the order
// // inside fxn bnakr kaam krna is good


// kuch nya krte h
// callback hell: nested callbacks
// Text         Delay   Color
// one          1s      Violet
// two          1s      purple
// three        1s      red
// four         1s      pink
// five         1s      green
// six          1s      blue
// seven        1s      brown

// setTimeout(() => {
//     heading1.textContent = "one"
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "two"
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "three"
//             heading3.style.color = "red"
//             setTimeout(() => {
//                 heading4.textContent = "four"
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = "five"
//                     heading5.style.color = "green"
//                     setTimeout(() => {
//                         heading6.textContent = "six"
//                         heading6.style.color = "blue"
//                         setTimeout(() => {
//                             heading7.textContent = "seven"
//                             heading7.style.color = "brown"
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// isko hm next file mei edit krenge , bhot gnda code lgra h

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            // console.log("elt doesn't exist")
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    }, time);
}

// changeText(heading1, "one", "violet", 1000, () => {
//     changeText(heading2, "two", "green", 1000);
// });

// Pyramid of Doom
changeText(heading1, "1", "violet", 1000, () => {
    changeText(heading2, "2", "purple", 1000, () => {
        changeText(heading3, "3", "red", 1000, () => {
            changeText(heading4, "4", "blue", 1000, () => {
                changeText(heading5, "5", "green", 1000, () => {
                    changeText(heading6, "6", "brown", 1000, () => {
                        changeText(heading7, "7", "orange", 1000, () => {
                            console.log("done");
                        }, () => { console.log("failure callback, elt doesn't exist")});
                    }, () => { console.log("failure callback, elt doesn't exist")});
                }, () => { console.log("failure callback, elt doesn't exist")});
            }, () => { console.log("failure callback, elt doesn't exist")});
        }, () => { console.log("failure callback, elt doesn't exist")});
    }, () => { console.log("failure callback, elt doesn't exist")});
}, () => { console.log("failure callback, elt doesn't exist")});

// go to 8th file now