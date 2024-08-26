// let arr = [1,3,10,11,15]
// let goal = 13 
let arr = [3,3]
let goal = 6
// Output = 1,2

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if((arr[i]+arr[j] === goal)&&i!=j){
            console.log([i,j])
            console.log([arr[i],arr[j]])
            // break;
        }
    }
}
