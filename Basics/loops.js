let arr = ["Shasha", "Shawn", "Camila", "Uttu", "NYC"] 

for (let i = 0; i < arr.length; i++) {
    console.log("Hello " + arr[i]);
}

arr.forEach(function arr(i) {
    console.log("Hey! " + i)
})

arr.map((n)=>{
    console.log(`map of ${n}`)
})

console.log('for Of')
for (i of arr) {
    console.log(i)
}

console.log('for In ')
for (i in arr) {
    console.log(arr[i])
}