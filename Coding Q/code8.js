var reverse = function(x) {
    if(x>0){
        let s = String(x)
        let n = s.split('').reverse().join('')
        var num = Number(n)
    }
    else{
        let s = String(x*-1)
        let n = s.split('').reverse().join('')
        num = Number(n*-1)
    }
    if(Math.pow(-2,31) <= num <= Math.pow(2,31) - 1){
        return Number(num)
    }
    else{
        return 0
    }
};

console.log(reverse(-123))