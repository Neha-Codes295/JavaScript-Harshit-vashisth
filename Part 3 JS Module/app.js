// console.log("hi");

// const firstName = "Neha";
// const age = "20";

// maanlo ye codes bhot bde h to inko hm split krke utils ki files mei likhenege

import { firstName as fname } from "./utils/fname.js";
import { age } from "./utils/age.js";

console.log(fname, age);
// ab print krne k liye files ko link krna pdega by importing them
// export likjhdo const k aage in the other files
// and import likhna pdega is file mei and then location bhtao


import hi, { person , person2} from "./utils/person.js";
// import P , {person2} from "./utils/person.js";
// import ( person , person2} from "./utils/person.js";

const p1 = new person("Neha", "bhatia", "20");
const p2 = new person2("Naina", "bhatia", "20");
console.log(p1);
p1.info();
console.log(hi);

// agr export k saath default likhte h(only given to a single one)
// to fir import k time naam change kr skte h