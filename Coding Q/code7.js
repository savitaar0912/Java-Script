let num1 = [1,3]
let num2 = [2,4]

const merged = [...num1, ...num2].sort((a, b) => a - b);
const len = merged.length;    
console.log(num1)
var median
if(merged.length%2!=0){
    median = merged[Math.floor(merged.length/2)]
}
else{
    median = (merged[Math.floor(merged.length/2)] + merged[(Math.floor(merged.length/2))-1])/2
}

console.log(median)