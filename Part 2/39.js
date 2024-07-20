const todoForm = document.querySelector(".form-todo");
console.log(todoForm);


const todoInput = document.querySelector(".form-todo input[type='text']");
console.log(todoInput);


const TodoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement("Li");

    const newLiInnerHTML = `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHTML;
    // console.log(newLi);
    TodoList.append(newLi);
    todoInput.value = "";
})


TodoList.addEventListener("click", (e) =>{
    // console.log(e.target);
    // check if user click on done
    if(e.target.classList.contains("remove")){
        // console.log("u want to rmv smtng??");
        const targetLi = e.target.parentNode.parentNode;
        // console.log(targetLi);
        targetLi.remove();
    };
    
    // if remove
    if(e.target.classList.contains("done")){
        // console.log("great!!");
        const LiSpan = e.target.parentNode.previousElementSibling;
        // console.log(LiSpan);
        LiSpan.style.textDecoration = "Line-through";
    };
});