const URL = "https://jsonplaceholder.typicode.com/posts";
// look at the steps below

const xhr = new XMLHttpRequest();
// console.log(xhr);

// 2:30:30 pe kuch JSON resouce krke dikhate h HV bro...Watch video and listen carefully

// diff btwn JS and JSON
// 1.) key value pair of JSON have " " everywhere
// 2.) methods afre not there in JSON


// step 1:
console.log(xhr.readyState);
xhr.open("GET", URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // // console.log(xhr);
//     console.log(xhr.readyState);
//     // o/p ko dekho or google kro..diff values have diff. meanings

//     if(xhr.readyState === 4){
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         // console.log(data);
//         console.log(typeof data);
//     }
// }

xhr.onload = function(){
    console.log(xhr.readyState);
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();

// types of errors: 2:48:40