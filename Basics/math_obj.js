
// Printing the Math Object
let m = Math;
console.log(m)

// Printing the constants from Math Object
console.log("The value of m.E is ", m.E)
console.log("The value of m.PI is ", m.PI)
console.log("The value of m.LN2 is ", m.LN2)
console.log("The value of m.SQRT1_2 is ", m.SQRT1_2)
console.log("The value of m.LOG2E is ", m.LOG2E)

// Printing the Functions from Math Object 
let a = 34.64534;
let b = 89;

console.log("The value of a and b is ", a, b);
console.log("The value of a and b rounded is ", m.round(a), m.round(b));

console.log("2 raised to the power of 12 is ", m.pow(2, 12))

console.log("Square root of 36 is ", m.sqrt(36))

// Ceil and floor
console.log("5.8 rounded up to nearest integer is ", m.ceil(5.8))
console.log("5.8 rounded down to nearest integer is ", m.floor(5.8))

// Abs function
console.log("Absolute value of 5.66 is  ", m.abs(5.66))
console.log("Absolute value of -5.66 is  ", m.abs(-5.66))

// Trinonometric Functions
console.log("The value of sin(pi) is ", m.sin(m.PI / 2))
console.log("The value of tan(pi) is ", m.tan(m.PI / 2))
console.log("The value of cos(pi) is ", m.cos(m.PI / 2))

// Min and max functions
console.log("Minimum value of 4, 5, 6 is ", m.min(4, 5, 6));
console.log("Minimum value of 14, 5, 16 is ", m.min(14, 5, 16));
console.log("Maximum value of 4, 5, 6 is ", m.max(4, 5, 6));
console.log("Maximum value of 14, 5, 16 is ", m.max(14, 5, 16));

// Generating a random number
let r = m.random();
// Random number b/w (a, b) = a + (b-a)*m.random()
let a1 = 50;
let b1 = 60;
let r50_60 = a1 + (b1 - a1) * r;
console.log("The random number is ", r)
console.log("The random number between 50 to 60 is ", r50_60)
