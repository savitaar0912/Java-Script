const tribo = (arr, n) => {
    let a = arr[0]
    let b = arr[1]
    let c = arr[2]

    let arr1 = [a, b, c]

    for (let i = 0; i < n - 3; i++) {
        var d = a + b + c
        arr1.push(d)
        a = b
        b = c
        c = d
    }
    return arr1
}

console.log(tribo([1, 2, 3], 8))