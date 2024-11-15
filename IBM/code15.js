const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 50,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 11,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

console.log(users.filter(user => user.isActive == true && user.age <= 50))

