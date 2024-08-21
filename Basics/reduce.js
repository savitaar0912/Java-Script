const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((callBack, initialValue) => {
    console.log('callBack',callBack)
    // console.log('initialValue',initialValue)
    return callBack + initialValue;
}, 0);

console.log(sum); // Output: 15
