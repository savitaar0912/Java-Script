// MAX NO.

// function findMaxNumber(arr) {
//     return Math.max(...arr);
// }

const findMaxNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j]>arr[j+1]){
                const temp = arr[j]
                return temp
            }
        }
    }
}

arr = [1,2,6,9,4]
console.log(findMaxNumber(arr))
