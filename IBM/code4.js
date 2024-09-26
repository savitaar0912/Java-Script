// 4. Write a program to print city average from given array.

var array1 = [["Chennai", 1], ["Delhi", 2], ["Bangalore", 3], ["Pune", 4]]
var array2 = [["Chennai", 3], ["Mumbai", 1], ["Bangalore", 7], ["Pune", 10]]

// Output: {  Pune: 7, Bangalore: 5, Chennai: 2, Delhi: 2, Mumbai: 1 }

const average = (arr1,arr2) => {

    let result = {}

    const addToResult = (city, value) => {
        if (!result[city]) {
            result[city] = [];
        }
        result[city].push(value);
    };

    arr1.forEach(city => {
        addToResult(city[0],city[1])
    });

    arr2.forEach(city => {
        addToResult(city[0],city[1])
    });

    for(let city in result){
        const total = result[city].reduce((acc,curr)=> acc + curr, 0)
        const avg = total/result[city].length
        result[city] = avg
    }

    return result

}

console.log(average(array1,array2))