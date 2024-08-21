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

let obj1 = {
    greet: 'Hey!',
    names: ['Shasha', "San", "shiv", "shub"],
    msg() {
        this.names.forEach((n) => {
            console.log(this.greet + " " + n)
        })
    },
    msg2() {
        this.names.map((n) => {
            console.log(this.greet + " " + n)
        })
    }
}
obj1.msg();
obj1.msg2();

// add new el in obj
obj1['hello'] = 'hello';
console.log(obj1)


const arrayOfObjects = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
    { id: 3, price: 30 }
];

const newArray = arrayOfObjects.map((obj) => ({price: obj.price}));
console.log(newArray);
