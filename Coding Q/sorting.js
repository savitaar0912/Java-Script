let a = [7, 8, 3, 4, 5, 1]

const ascend = (arr) => {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const sortedarr = ascend(a)
console.log(sortedarr)

const descend = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] < arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(descend(a))

console.log(a.sort((a,b)=>a-b))
console.log(a.sort((a,b)=>b-a))