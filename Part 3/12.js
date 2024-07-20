const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(xhr.status >=200 && xhr.status <300){
                resolve(xhr.respomse);
            }else{
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = function(){
            reject(new Error("Somethign went wroong"));
        }
        xhr.send();
    })
}

// const whatisTHis = sendRequest("GET", URL);
// // ye promise return krega
// console.log(whatisTHis);

sendRequest("GET", URL)
    .then(Response => {
        console.log(Response);
        const data = JSON.parse(Response);
        console.log(data);
        return data;
    })
    .then(data => {
        console.log(data[3].id);
    })
    .catch(error =>{
        console.log(error);
    })