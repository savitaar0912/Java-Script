
// 1. Remove duplicates from below array, and provide the possible solutions.

var duplicates = [1, 1, 2, -2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6, 1, 8, 7, 3, 19, 19, 19];

const newArr = duplicates.sort((a,b)=>(a-b))

// console.log(newArr);

const newSet = new Set(newArr)

// console.log(newSet);

const result = [...newSet];
console.log(result);
