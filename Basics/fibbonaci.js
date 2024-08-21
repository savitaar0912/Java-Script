// FIBBONACI

const fib = (n) => {
    var a = 0
    var b = 1
    let arr = [a,b]
    // bcoz we want to run this loop this many times not iterate elements
    for (let i = 0; i < n-2; i++){
        c = (a + b)
        arr.push(c)
        a = b
        b = c 
    }
    return arr
}

console.log(fib(6))