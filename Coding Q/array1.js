input = [{ a: 10 }, { b: 20 }, { c: 30 }, { d: 40 }]

const output = (data) => {

    const out = {}

    // const out = Object.assign({}, ...data); 

    // Object.entries(el).forEach(([key, value]) => {  // Using forEach for clarity
    //     console.log(key)   // a
    //     console.log(value)  // 10
    //     out[key] = value;  // out = {a:10}
    // });

    // for (i of data) {
    //     console.log(i)   // {a:10}
    data.map((el) => {
        let obj = el
        for (j in obj) {
            console.log(j)   // a
            console.log(obj[j])  // 10
            out[j] = obj[j]   // out = {a:10}
        }
    })
    return out
}

console.log(output(input))
