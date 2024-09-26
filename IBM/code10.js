// 10. Create a function to return the longest word in a string

// Input: const input = 'Sridhar working as developer in IBM since 2022'

const input = 'Sridhar working as developer in IBM since 2022'

const longest = (words) => {
    var maxLen = 0
    var res = ""
    words.split(" ").forEach(element => {
        if(element.length > maxLen){
            maxLen = element.length
            res = element
        }
    });
    return res
}

console.log(longest(input))
// Output: developer