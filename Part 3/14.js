// async await

console.log("hii");

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(res => {
    //        return res.json()
    //     })
    //     .then(data =>{
        //         console.log(data);
//     })


// async function getPosts(){
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(response);
//     // console.log(data);
//     return data;
// }
// or

const getPosts = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response);
    // console.log(data);
    return data;
}

getPosts()
.then(myData => {
    console.log(myData);
})
.catch(error =>{
    console.log(error);
})

// const returned = getPosts();
// console.log(returned);

console.log("bii");