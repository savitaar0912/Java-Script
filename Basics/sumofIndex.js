let arr = [1,3,10,11,15]
let goal = 13 
// let arr = [3,3]
// let goal = 6
// Output = 1,2

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === goal) {
            console.log([i, j]);
            console.log([arr[i], arr[j]]);
            return; // Exit the function after finding the first pair
        }
    }
}

console.log("No pair found");
