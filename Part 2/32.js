const allButton = document.querySelectorAll('button');
console.log(allButton);

for(let button of allButton){
    button.addEventListener("click", function(){
        console.log(this);
        console.log("u clicked me");
        console.log(this.textContent);
    })
}

// agr arrow fxn bnayenge to window hi milega this mei