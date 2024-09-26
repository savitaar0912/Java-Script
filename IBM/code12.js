// 12. Write a program to find missing numbers from an array

const input = [1, 2, 6, 10];

const notAval = (arr) => {
  
  var res = [];
  var len = arr.length;
  start = arr[0];
  end = arr[len - 1];

  for (let i = start; i <= end; i++) {
    if (!arr.includes(i)) {
      res.push(i);
    }
  }

  return res;
};

const result = notAval(input);
console.log(result);

// Output: 3,4,5