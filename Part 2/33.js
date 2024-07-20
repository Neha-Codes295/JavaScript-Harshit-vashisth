// event object

// const firstbutton = document.querySelector("#one");

// firstbutton.addEventListener("click", function(abc){
//     // console.log(this);
//     console.log(abc);
// })

// jb bhi mai kisi bhi elt pe event listener add hoga, browser nzr rkhta h ki kb action perform hora h , so that vo kaam kr ske
// JS Engine --- line by line execute krta h
// browser --- JS Engine + extra features(WebApi)

// jb browser ko pta chla ki user ne event perform kia , jo hum listen kr re h
// browser 2 kaam krega
// 1.) jo callback fxn h vo JS engine ko dega
// 2.) callback fxn k sath browser jo event hua h uski info bhi dega in form of an object


const allButtons = document.querySelectorAll(".mu-buttons button");

for(let button of allButtons){
    button.addEventListener("click", (e) => {
        // console.log(this);
        // console.log(e.currentTarget);
        // console.log(e.target);
    })
}