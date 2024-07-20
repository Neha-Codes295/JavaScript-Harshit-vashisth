// rest parameters

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    // console.log(`c is ${c}`);
    console.log(`c is`, c);
}

myFunc(3,5,7,9,1,0,8,4);
// ab bche khuche mujghe c ko dene h to rest paramter use kr skte h(...)


function addAll(...numbers){
    // console.log(numbers);
    // console.log(Array.isArray(numbers));
    
    let total = 0;
    for(let number of numbers){
        console.log(number);
        total = total + number;
        console.log(total);
    }
}
addAll(1,4,6,8.4,3);