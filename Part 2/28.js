// static list vs live list
// querySelectorAll hmei static list degi 
// getElementBY... hmei live list degi


const listItems = document.querySelectorAll(".todo-list li");
const sixLi = document.createElement("li");
sixLi.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixLi); 
console.log(listItems);