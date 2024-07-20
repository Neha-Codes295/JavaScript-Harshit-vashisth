// fxn returning promise
function chaiPromise(){
    const baalti = ['milk', 'chai'];
    return new Promise((resolve,reject) => {
        if(baalti.includes("chai") && baalti.includes("milk")){
            resolve("Meri Chai");
            // yaha value as object bhi de skte, num bhi, string bhi, kuch bhi
        }else{
            reject("can't do it");
        }
    })
}

chaiPromise().then(
    (MeriChai) =>{
    console.log("let's drink", MeriChai);
    }
    ,
).catch(
    (error)=>{console.log(error)}
)