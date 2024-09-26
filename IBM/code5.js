// 5. Write a program to print values in sorted without using sort method.

let array = [9,82,6,7,2,-1,0,8,5];

const ascend = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j]>arr[j+1]){
                const temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(ascend(array))
// Output: [-1, 0, 2,  5, 6, 7, 8, 9, 82]