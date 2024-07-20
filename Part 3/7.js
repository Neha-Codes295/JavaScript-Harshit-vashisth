// Promise.resolve
// Promise chaining

const myPromise = Promise.resolve(6);
// ye promise k resolve hone pr 5 value dega in o/p
// console.log(myPromise);
myPromise.then(value=>{
    console.log(value);
});

// then() : ye hmesha promise return krta h

function meraPromise(){
    return new Promise((resolve, reject)=>{
        resolve("YOO!!");
    })
}

meraPromise()
    .then(value=>{
        console.log(value);
        value += "Hoo";
        // return value;
        // yaha value return ni hogi, promise hoga
        // or
        return Promise.resolve(value);
    })
    .then(value=>{
        console.log(value);
        value += "!!Yoo"
        return value;
    })
    .then(value=>{
        console.log(value);
    })

// "neha".then((value)=>{
//     console.log(value);
// })

// ab firse 3rd file pr jao or code sudharo