const data = [
    {
        id: 1,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        price: 30,
        category: 'Drink',
        itemName: 'Coke',
    },
    {
        id: 3,
        price: 50,
        category: 'Food',
        itemName: 'Burger',
    },
];

const foodItems = (data) => {
    const newData = data.filter(item => item.category=="Food")
    .map(({ itemName, price }) => ({ itemName, price }))
    return newData
}

console.log(foodItems(data));
