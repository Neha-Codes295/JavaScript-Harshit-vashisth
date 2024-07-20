// hoisting

console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(FullName);

function myFunction(){
    console.log("this is my function");
}
 
var LastName = "Bhatia";
var FullName = firstName + " " + LastName;
console.log(FullName);

// jb kaam ho jayega to GEC pop ho jayega stack se