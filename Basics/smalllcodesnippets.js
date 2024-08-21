// will return false as addition takes 16 digit & it'll not be eq.
console.log(0.1+0.2===0.3 )

// 1*(8^1) + 5*(8^0) and so on
console.log(0015)
console.log(00101)
console.log(0010101) //8^4 + 8^2 + 1

// In JavaScript, when using the `==` operator for comparison, if the operands are of different types, JavaScript will try to convert them to a common type before making the comparison. In this case, `'2'` is a string and `[2]` is an array. JavaScript will attempt to convert both operands to a common type before comparing them. The array `[2]` will be converted to a string when compared with `'2'`. The string representation of an array is the elements of the array separated by commas inside square brackets. So, `[2]` will be converted to the string `'2'`.
console.log('2' == [2])
console.log('2' === [2])

var a
console.log(a)
a = 3
console.log(a)

console.log('8'+1)
console.log('3'-1)
console.log(8>3>1)
console.log(8<3<1)