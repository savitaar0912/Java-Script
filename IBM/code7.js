// 7. Write a java script program to print table from given row and column

// Input: 3 rows and 5 column

const tableOut = (row, col) => {
    var table = ""

    for (let i = 1; i < row+1; i++) {
        for (let j = 1; j <= col; j++) {
            table += `${i*j} \t`
        }
        table += '\n'
    }

    return table
}

console.log(tableOut(3,5))