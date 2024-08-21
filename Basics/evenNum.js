arr = [1,2,3,4,5,6,7,8,9,10]

arr2  = []

// for (i of arr){
//     if(i %2 === 0){
//         arr2.push(i)
//     }
// }

// arr.map((n) => (n % 2 === 0 ? arr2.push(n) : null));
// console.log(arr2)

console.log(arr.filter(num => num % 2 === 0 ))