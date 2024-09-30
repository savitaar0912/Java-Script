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


function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(6)); // Output: 18
