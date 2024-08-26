// add in reverse and give output in an array

l1 = [2,4,3]
l2 = [5,6,4]

var addTwoNumbers = function(l1, l2) {
    let n1 = ''
    let n2 = ''
    for (i of l1){
        n1 = n1 + String(i)
    }
    for(i of l2){
        n2 += String(i)
    }
    console.log(n1.split('').reverse().join(''))
    console.log(n2.split('').reverse().join(''))
    let num1 = n1.split('').reverse().join('')
    let num2 = n2.split('').reverse().join('')
    res = Number(num1) + Number(num2)
    l3 = (String(res)).split('').reverse()
    console.log(l3)
    l4=[]
    for(i of l3){
        console.log(Number(i))
        l4.push(Number(i))
    }
    console.log(l4)
};

addTwoNumbers(l1,l2)