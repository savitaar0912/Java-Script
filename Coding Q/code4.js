// let arr = [1 ,2, 3, 4, 4]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++){
//        if( (i!=j) && (arr[i] == arr[j])){
//         console.log(arr[i])
//         break;
//        }
//     }
// }

let arr = [1 ,2, 3, 4, 4];
let seen = new Set();

for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
        console.log(arr[i]);
    } else {
        seen.add(arr[i]);
    }
}

const arr2 = [2, 2, 3, 4, 5, 6, 6, 7, 4, 5];

const dup = (arr) => {
    const a = new Set(); // Use a Set to store duplicates
    const seen = new Set(); // Track seen elements
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            a.add(arr[i]); // Add to duplicates if already seen
        } else {
            seen.add(arr[i]); // Mark as seen
        }
    }
    return Array.from(a).sort((a, b) => a - b); // Convert Set back to array and sort
}

console.log(dup(arr2))