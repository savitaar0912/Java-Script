// Print the following pattern a1b2c3def, a1b2c3d4e5f6,  a1b2c3456

const merge = (x,y) => {
    let l = Math.min(x.length,y.length)
    var word = ''
    var i
    for (i = 0; i < l; i++) {
        word = word + x[i] + y[i]
    }
    return word + x.slice(i) + y.slice(i)
}

console.log(merge('abcdef','123'))
console.log(merge('abcdef','123456'))
console.log(merge('abc','123456'))
