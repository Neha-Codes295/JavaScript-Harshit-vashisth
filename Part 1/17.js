// nested if else

// chalo ek Game bnaate h
// winning numebr is 6

// guess krna h users ko 
// 6: guess is right
// 3: too low
// 6: too high

let WinninNumber = 6;
let userGuess = +prompt("Guess a number");
console.log(typeof userGuess, userGuess)

if(userGuess === WinninNumber){
    console.log("Your Guess is right!!");
}
else{
    if(userGuess > WinninNumber){
        console.log("Your Guess is too high!!");
    }
    else{
        console.log("Your Guess is too low!!");
    }
}