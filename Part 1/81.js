function hello(){
    console.log("hello world");
}
hello();

// javascript mei jo fxn hote h ===> unkok fxn + object dono ki trh treat kr skte h

console.log(hello.name);
// ye name vali ek fxn ki prop hoti h
// u can add ur own properties also
hello.myOwnProp = "very unique value";
console.log(hello.myOwnProp);

// name prop --> tells fxn name
// fxn provides more useful props
// eg : call, apply , bind method are also provided by fxn

// fxn also give free space, which is an empty object {} i.e. a prototype
// hello.prototype; // {}
// console.log(hello.prototype); // constructor milra h ek
// only fxn provide prototype property
// aisa maano ki ye free mila h or isko use krna h, jisme hm key value pair add kr skte h

if(hello.prototype){
    console.log("prototype present");
}else{
    console.log("not present");
}

// const hlo = ["value1"];
// agr hello ek var hota to it won't have this prototype prop


hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
}
console.log(hello.prototype.abc);
console.log(hello.prototype.sing());