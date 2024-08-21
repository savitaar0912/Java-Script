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
        id: 1,
        price: 20,
        category: 'Food',
        itemName: 'Pizza',
        newItem: {
            id: 2,
            price: 40,
            category: 'Drink',
            itemName: 'Coke',
            newItem: {
                id: 3,
                price: 60,
                category: 'Food',
                itemName: 'Burger',
            }
        }
    }
]

const extractPrices = (arr) => {
    const newData = arr.map((el) => {
        const result = []

        result.push({ price: el.price, itemName: el.itemName });
        if (el.newItem) {
            result.push(...extractPrices([el.newItem])[0]);
        }
        return result;
    });
    return newData;
}

const output = extractPrices(data);
console.log(output);
