// 2. Write a program to get expected output. It should print maximum sentence from an array to object

var words = [
  "How is your health",
  "what is your native",
  "How is your family",
  "where your friend",
  "is is",
];

const countWord = (arr) => {
  let wordCount = {};

  arr.forEach((sentence) => {
    sentence.split(" ").forEach((word) => {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
  });

  for (var word in wordCount) {
    if (wordCount[word] === 1) {
      delete wordCount[word];
    }
  }

  let sortedWordCount = Object.fromEntries(
    Object.entries(wordCount).sort((a, b) => b[1] - a[1])
  );

  return sortedWordCount;
};

console.log(countWord(words));

// Output: {is: 5, your: 4, How:2}
