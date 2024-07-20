// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;

const ul = document.querySelector(".todo-list");

// new elt
const li = document.createElement("li");
li.textContent = "new todo";

const referenceNode = document.querySelector(".first-todo");

// ul.appendChild(li);
// ul.insertBefore(li, referenceNode);

// ul.replaceChild(li, referenceNode);

ul.removeChild(referenceNode);