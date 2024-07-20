// setInterval

console.log("hi");
// setInterval(()=>{
//     console.log(Math.random());
// }, 1000);
// hr ek second k baad , ek nya random number generate hoga

// setInterval(() => {
//     let total = 0;
//     for(let i=0;i<3;i++){
//         total += i;
//     }
//     console.log(total);
//     console.log(Math.random());
// }, 500);
// ye vala bs example k liye tha
console.log("bi");

const body = document.body;
const button = document.querySelector("button");
// console.log(button);

// console.log(body);
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    // console.log(rgb);
    body.style.background = rgb;
}, 1000);

button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
    // isse bkg k rgb ka value mil jayega
});
console.log(intervalId);