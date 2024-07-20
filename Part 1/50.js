// block scope vs function scope

// let and const are block scope
// var is function scope


{
    let firstName = "Neha";
    console.log(firstName);
}

// console.log(firstName);
// error aayega ki firstName is not defined
// this is cz let and const are block scope elements
// sirf usi block mei use kr skte h variable ko jis jaha unko bnaya ho

{
    let firstName = "Naina";
    console.log(firstName);
}
// var ka naam same h pr alg block mei h to we can use them

// const firstName = "Nannu";
// console.log(firstName);
// ye global scope mei h , ye bhi use kr skte h


{
    var firstName = "NehaHere";
}
console.log(firstName);
// var ko use kr skte h aise hi kahi bhi, uska scope global h


if(true){
    let name = "Honey";
    console.log(name);

    var Name = "Hunny";
    console.log(Name);
}
// console.log(name);
// ye nhi print hoga

console.log(Name);
// ye print hoga cz var se bna h


function myApp(){
    if(true){
        let naam = "Radhe";
        console.log(naam);

        var naaam = "RadheKrishna";
        console.log(naaam);
    }
    // console.log(naam);
    // ye nhi chlega

    console.log(naaam);
}
myApp();
// var ko kahin bhi use kr skte ho 
// but let and const ko sirf usi block mei jahan vo bnaye gye h