// understand callback

function myFunc(callback){
    console.log("Fxn is doing task 1");
    callback();
}
function myFunc2(){
    console.log("Fxn is doing task 2");
}
// myFunc();
// myFunc2();
myFunc(myFunc2);


function getTwoNumandAdd(n1, n2, callback){
    console.log(n1, n2);
    if(typeof n1 === "number" && typeof n1 === "number"){
        callback(n1, n2);
    }
    else{
        console.log("Wrong data type");
    }
}
function addTwoNum(n1, n2){
    console.log(n1 + n2);
}
// addTwoNum(6,2);
getTwoNumandAdd(6,2,addTwoNum);
getTwoNumandAdd("6","2",addTwoNum);
// ab agr num pass kro ya str, dono pe hi work hojayega
// pr ye bhi kr skte h ki if lgakr noldo ki dono n1, n2 are number tbhi sirf callback run krega