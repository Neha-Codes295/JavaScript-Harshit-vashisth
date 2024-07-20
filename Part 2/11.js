function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hii");
            counter++;
        }else{
            console.log("I've already called it");
        }
    }
}
const myFunc = func();
myFunc();
myFunc();
myFunc();
const myFunc2 = func();
myFunc2();
myFunc2();
myFunc2();