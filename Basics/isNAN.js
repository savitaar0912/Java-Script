console.log(isNaN(NaN));          // Output: true
console.log(isNaN(123));          // Output: false (123 is a number)
console.log(isNaN('hello'));      // Output: true ('hello' cannot be converted to a number)
console.log(isNaN('123'));        // Output: false ('123' can be converted to the number 123)
console.log(isNaN(true));         // Output: false (true is treated as 1, which is a number)
console.log(isNaN(undefined));    // Output: true (undefined cannot be converted to a number)
console.log(isNaN(null));         // Output: false (null is treated as 0, which is a number)
