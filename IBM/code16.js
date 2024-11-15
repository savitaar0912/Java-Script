const arr = [2, 5, 6, 7, 3, 2, 1, 3, 4, 5, 6, 1, 3, 1, 3, 1];

// Find the minimum number
const minNumber = Math.min(...arr);

// Count occurrences of the minimum number
const occurrences = arr.filter(num => num === minNumber).length;

console.log(`Minimum number: ${minNumber}`);
console.log(`Occurrences: ${occurrences}`);
