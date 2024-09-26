// 9. Write a program to print sum of the given array.

// Input: const sum = [[1,2],[3,4],[5,6,[7,8,9]]]

const num = [[1,2],[3,4],[5,6,[7,8,9]]]

const sum = (arr) => {
    var total = 0
    arr.forEach((n) => {
        if(Array.isArray(n)){
            total += sum(n)
        }
        else{
            total += n
        }
    });
    return total
}
console.log(sum(num))

// Output: 45
