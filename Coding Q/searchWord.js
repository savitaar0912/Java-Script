const search = (arr) => {
    let fword = arr[0].split('');
    let gword = arr[1].split('');
    return gword.every(char => fword.includes(char));
}

let name1 = ['boy', 'oy'];
let name2 = ['radha', 'dhaa'];
let name3 = ['shashank', 'savitar'];

console.log(search(name1)); // true
console.log(search(name2)); // true
console.log(search(name3)); // false
