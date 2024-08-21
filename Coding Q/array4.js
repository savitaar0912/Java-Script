const data = [
    {
        id: 1,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
        newItem: {
            id: 2,
            price: 30,
            category: 'Drink',
            itemName: 'Coke',
            newItem: {
                id: 3,
                price: 50,
                category: 'Food',
                itemName: 'Burger',
            }
        }
    },
    {
        id: 4,
        price: 20,
        category: 'Food',
        itemName: 'Pizza',
        newItem: {
            id: 5,
            price: 40,
            category: 'Drink',
            itemName: 'Coke',
            newItem: {
                id: 6,
                price: 60,
                category: 'Food',
                itemName: 'Burger',
            }
        }
    }
]

// Same way as array3
// const valueOnly = (input) => {

//     const newData = input.map((data) => {

//         const result = [];

//         // we need {key,value} 
//         for (const key in data) {
//             const dataVal = data[key]
//             // console.log("dataVal",dataVal)

//             if (!isNaN(dataVal) && key === 'price') {
//                 result.push({ [key]: dataVal })
//             }
//             else if (typeof dataVal === "object") {
//                 result.push(...valueOnly([dataVal])[0])
//             }
//         }
//         return result;
//     });
//     return newData
// }

// Without map
function valueOnly(data) {

    const result = [];
    
    // we need {key,value} 
    for (const key in data) {
        const dataVal = data[key]
        // console.log("dataVal",dataVal)
        
        if (!isNaN(dataVal) && key === 'price') {
            result.push({ [key]: dataVal })
        }
        else if (typeof dataVal === "object") {
            result.push(...valueOnly(dataVal))
        }
    }

    return result
}


const output = valueOnly(data);
console.log(output);