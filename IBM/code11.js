// 11. Group the words from array

const input= ['bag', 'gab', 'foo', 'abg', 'oof', 'ofo']

const groupWord = (words) => {

    const groups = {};

    words.map(word => {
        const key = word.split('').sort().join('');

        if (!groups[key]) {
            groups[key] = [];
        }
        
        groups[key].push(word);
    });

    return Object.values(groups);
};

const result = groupWord(input);

console.log(result);
// Output: [["bag", "gab", "abg"], ["foo", "oof", "ofo"]]