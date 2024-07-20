// compilation : dekhna/review
// 3 phases: Tokenizing/lexing -> Passing -> Code Generation
// early error checkiing + determining appropriate scope for variables

// then code execution
// In JS code executes inside execution context
// or sbse phle jo execution context create hota h vo GlobalExecution Context hota h

// why compilation


// JS is synchronous programming language i.e. jb tk 1st line completely execute nhi hoti tb tk dusri execute nhi hogi
// How JavaScript Code executes


// jo JS ka var kisi fxn mei nhi hota vo global scope ko belong krta h
// What's Global Execution context?
// creation phase -> code execution phase

// What's Local Execution context?
// closures


// GEC sbse phle stack mei add hota h

console.log(this);
console.log(window);
console.log(firstName); // ye undefined isliye h cz hmare compiler ko pta hi nhi h ki firstName h kya, cz abhhi tk vo bna hi nhi tha , baad mei bna h
var firstName = "Neha";
console.log(firstName);

function myFunction(){
    console.log("this is my function");
}
// jis trh hmne apna code likha h , vo decide krta h hmara lexical scope

var LastName = "Bhatia";
var FullName = firstName + " " + LastName;
console.log(FullName);