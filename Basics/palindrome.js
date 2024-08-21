const palindrome = (string) => {
    console.log(string.split('').reverse().join(''))
    return string === string.split('').reverse().join('')
}

console.log(palindrome("naman"))
