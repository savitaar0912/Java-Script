var reverse = function(x) {
    let num = 0; // Initialize num outside the if-else
    // console.log(Math.sign(x))
    let s = String(Math.abs(x)); // Use Math.abs to handle both cases
    num = Number(s.split('').reverse().join('')) * Math.sign(x); // Reverse and restore sign
    if(Math.pow(-2,31) <= num <= Math.pow(2,31) - 1){
        return Number(num)
    }
    else{
        return 0
    }
};

console.log(reverse(-123))
console.log(reverse(123))