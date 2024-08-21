// CURRYING

function sum(x, y) {
    if (arguments.length === 2) {
        return x + y;
    } else if (arguments.length === 1) {
        return function(y) {
            return x + y;
        };
    }
}

console.log(sum(2, 3)); // Output: 5
console.log(sum(2)(3)); // Output: 5
