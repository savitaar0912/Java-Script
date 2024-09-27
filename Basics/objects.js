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


let myobj = {
    'first name': 'savitaar', 
    channel: 'Codmsavitaar',
    isActive: true,
    marks: [1,5,3,6]
}

// console.log(myobj)
// ways to target values in object 
console.log(myobj['first name'])
console.log(myobj['channel'])
console.log(myobj.channel)
console.log(myobj.marks)
console.log(myobj.isActive)

jsonobj = {
    names: ['Shasha', 'shiv', 'san', 'shub'],
    foods: ['momos', 'rolls', 'shake', 'drinks'],
    home: 'kanpur',
    drink: 'MC float',
    deal: 'Meal',
}
// console.log(jsonobj)

// convert to str 
let strobj = JSON.stringify(jsonobj)
console.log(strobj)

// replace in str
strobj = strobj.replace('kanpur', 'India')
console.log(strobj)

// back to json obj 
newobj = JSON.parse(strobj)
console.log(newobj)
