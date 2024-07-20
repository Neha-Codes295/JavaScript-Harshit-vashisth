console.log(this);
// console.log(window);

"use strict" 
function myFunc(){
    console.log(this); // ab undefined print hoga , age use strict n ho to window print hogi
    console.log("hello");
}
myFunc();
window.myFunc();