// clone nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
// ul.append(li);
// ul.prepend(li);
// ab dono to nhi honge , ek hi hoga, jo niche h
// iska sol h node ko clone krna

// const li2 = li.cloneNode();
// deep cloning is required
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);