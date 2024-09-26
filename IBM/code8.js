// 8. Write a program to group by their age.

let input = [
  { name: "Sridhar", age: 20 },
  { name: "Vijay", age: 21 },
  { name: "Ajith", age: 20 },
  { name: "Rajini", age: 50 },
  { name: "Surya", age: 21 },
];

const groupAge = (arr) => {
  let result = {};

  arr.forEach((names) => {
    var age = names.age;

    if (!result[age]) {
      result[age] = [];
    }

    result[age].push(names);
  });
  return result;
};

console.log(groupAge(input));

// Output:
// {
// 20: [{name: 'Sridhar', age: 20},{name: 'Ajith', age: 20}]
// 21: [{name: 'Vijay', age: 21},{name: 'Surya', age:21}]
// 50: [{name: 'Rajini', age: 50}]
// }
