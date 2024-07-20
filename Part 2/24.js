// ek acha way to add elt is: 

// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach stdt");
// // or
// newTodoItem.textContent = "Teach stdt";
// const todoList = document.querySelector(".todo-list");
// // newTodoItem.append(newTodoItemText);
// todoList.prepend(newTodoItem);
// // todoList.append(newTodoItem);
// console.log(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);


// before
// iski help se hm ul ke phle insert krvayenge
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach stdt";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);

// todoList.after(newTodoItem);