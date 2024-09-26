// 6. Write a javascript program to print expected output.

const FullName = ((inp) => {
    let first = ''
    let last = ''

    return {
        firstName : (name) => {
            first = name
            return FullName
        },
        lastName : (name) => {
            last = name
            return FullName
        },
        getFullName : () => {
            return `${first} ${last}`
        }
    }
})()


let input =  FullName.firstName('Sridhar').lastName('Vinayagam').getFullName()
console.log(input)

// Output: Sridhar Vinayagam