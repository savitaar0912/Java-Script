// MAX NO.

// function findMaxNumber(arr) {
//     return Math.max(...arr);
// }

const findMaxNumber = (arr) => {
    let maxVal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

arr = [1,2,6,9,4]
console.log(findMaxNumber(arr))
