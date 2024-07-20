const allButtons = document.querySelectorAll(".mu-buttons button");
console.log(allButtons);

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.currentTarget.textContent);
    })
})