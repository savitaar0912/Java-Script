const arr = [2, 2, 3, 4, 5, 6, 6, 7, 4, 5];

const dup = (arr) => {
    a = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i]==arr[j] && i!=j && !a.includes(arr[i])){
                a.push(arr[i])
            }
        }
    }
    return a
}

console.log(dup(arr))