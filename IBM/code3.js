// 3. Write a program to show the common letter from an array words.

// Input 1: let array = ["Avenger","Average","Avtar"]
// Output 1: Av

// Input 2: let array = ["Avenger","Average","Avestal"]
// Output 2: Ave

const findCommon = (words) => {
  if (!words.length) {
    return "";
  }

  let prefix = words[0];
  console.log(prefix);

  for (let i = 1; i < words.length; i++) {
    console.log(words[i].indexOf(prefix));
    while (words[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

//   let array = ["Avenger", "Average", "Avtar"];
let array = ["Avenger", "Average", "Avestal"];
console.log(findCommon(array));
