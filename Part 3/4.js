// Promise : ye ek aisi value h jo hmei abhi to nhi pta pr future mei pta hogi

console.log("hi");
const baalti = ['milk', 'chai', 'cheeni', 'cup', 'paani', 'chips', 'veggies'];

// promise h chai bnane ka
const myChaiPromise = new Promise((resolve,reject) => {
    if(baalti.includes("chai") && baalti.includes("milk")){
        resolve("Meri Chai");
        // yaha value as object bhi de skte, num bhi, string bhi, kuch bhi
    }else{
        reject("can't do it");
    }
})
// ye to sirf abhi promise ko produce kia h

// produce km krna hota h or consume zada

// ab consume krte h promise ko
myChaiPromise.then(
    // jb promise resolve hoga
    (MeriChai) =>{
    console.log("let's drink", MeriChai);
    }
    ,
    // jb promise reject hoga
    // (error)=>{console.log(error)}
    // yaha bhi add kr skte the reject ko pr chaining krte h hum
).catch(
    (error)=>{console.log(error)}
)

setTimeout(()=>{
    console.log("hi from setTimeout");
},0)

for(let i=0;i<5;i++){
    console.log(Math.random(), i);
}

console.log("bi");