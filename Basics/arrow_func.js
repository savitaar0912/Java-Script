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
