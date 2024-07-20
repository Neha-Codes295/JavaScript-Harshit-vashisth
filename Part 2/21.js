const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);
const htmlEltNode = rootNode.childNodes[0];
console.log(htmlEltNode);
console.dir(htmlEltNode);

console.log(htmlEltNode.childNodes);

const headEltNode = htmlEltNode.childNodes[0];
const TextNode1 = htmlEltNode.childNodes[1];
const bodyEltNode = htmlEltNode.childNodes[2];
console.log(headEltNode);
console.log(TextNode1);
console.log(bodyEltNode);

console.log(headEltNode.parentNode);

// sibling relation
// console.log(headEltNode.nextSibling);
// console.log(headEltNode.nextSibling.nextSibling);
// console.log(headEltNode.nextElementSibling); 
// console.log(headEltNode.childNodes); 


// const h1 = document.querySelector("h1");
// console.log(h1);
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// const baady = document.body;
// console.log(baady);

// const head = document.querySelector("head");
// console.log(head);

// const title = document.querySelector("title");
// console.log(title);
// console.log(title.childNodes);

const container = document.querySelector("container");
console.log(container.children);
console.log(container);
console.log(container.childNodes);