// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

// const whatisThis = fetch(URL);
// console.log(whatisThis);

fetch(URL)
    .then(response => {
        console.log("then");
        // console.log(response);
        // console.log(response.json());
        return response.json()
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })

// learn to create resource using fetch from google