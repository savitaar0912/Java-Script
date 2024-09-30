// FUNCTIONS

//arrow func
greet = () => {
    console.log("Good Night");
}
greet()

setTimeout(greet, 1000)
setTimeout(() => { console.log("Inside settimeout")}, 1500);

let sum = (a, b) => {
    console.log(a + b)
}
// let sum = (a,b) => a+b
setTimeout(() => { sum(4, 5) }, 2200);

function greeting(name, greets) {
    console.log(greets + " " + name)
}

let name1 = "Shashank"
let name2 = "Sshasbs"
let name3 = "Sasha"
let greets = "Hello"

greeting(name1, greets)
greeting(name2, greets)
greeting(name3, greets)

setTimeout(greeting, 2000, name1, greets);

var intervalID = setInterval(greeting, 1000, name3, greets)

setTimeout(() => {
    clearInterval(intervalID);
}, 5000);


function sum(a, b, c) {
    d = a + b + c
    return d
}

console.log(sum(1, 2, 3))

