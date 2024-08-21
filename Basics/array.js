let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
console.log(marks.sort());
console.log(marks[1]);
console.log(arr.length);

// check existance
console.log(` line11 ${Array.isArray('dfdf')}`);

// update element
arr[0] = 'harry';
console.log(arr);

let value = marks.indexOf(73);
console.log(value)

// Mutating or Modifying arrays
// At end
marks.push(3564);
console.log(marks)
// start
marks.unshift(1009);
console.log(marks)
// last el removed
console.log(marks.pop())
// after removing
console.log(marks)
// removes first 
console.log(marks.shift())
console.log(marks)

// only for array splice function is used (removes 3 el from index 2)
marks.splice(2, 3)
console.log(marks)
marks.reverse()
console.log(marks)
let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);
console.log(marks);

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