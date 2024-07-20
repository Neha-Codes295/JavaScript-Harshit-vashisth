// object destructuring

const band = {
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
    year : 1987,
};

// let var1 = band.bandName;
// const var2 = band.famousSong;
// var1 = "queen";
// console.log(var1, var2);
// or

// const{bandName, famousSong} = band;
// console.log(bandName);
// console.log(famousSong);

const{bandName:var1 , famousSong:var2 , ...restProp} = band;
console.log(var1);
console.log(var2);
console.log(restProp);