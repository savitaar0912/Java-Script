let myArr = [{name: 'A', score:[1,2,3,4,5]},{name: 'B', score:[1,2,4,5,7,8]},{name: 'C', score:[1,,5,1,4,5]}]

var res = {}

const calculateAverage = (arr) => {
  let validScores = arr.filter(score => score !== undefined); // Remove undefined values
  let sum = validScores.reduce((acc, curr) => acc + curr, 0);
  return sum / validScores.length;
};

let result = myArr.map((data) => {
  res[data.name] = calculateAverage(data.score);
});

console.log(res)

//Output: {A: averageofScore, B: averageofScore}