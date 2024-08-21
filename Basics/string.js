let  html  = "string"
html = html.concat(" is concatenated " , "IS added " , 'etc')
console.log(html);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf('etc'));
console.log(html.lastIndexOf('d'));
console.log(html.endsWith('c'));
console.log(html.includes('n'));
console.log(html.substring(1,6));
console.log(html.slice(1,6)); //or just a +/-ve number
console.log(html.split(''))
// split by space only
console.log(html.split(" "));


var str = "This is a string";
// console.log(str);

// First occurence of a substring
var position = str.indexOf('is');
console.log(position)

// Last occurence of a substring
position = str.lastIndexOf('is');
console.log(position)

// Substring from a string
// var substr = str.slice(1,7);
var substr = str.substring(1, 7);
console.log(substr)
// var substr1 = str.substr(1,3);

var replaced = str.replace('string', 'Savitaar');
console.log(replaced)

console.log(replaced.toUpperCase());
// console.log(str.toLowerCase());
var newString = str.concat(' New String')
console.log(newString)
var strWithWhitespaces = "   this contains        whitespaces   ";
// console.log(strWithWhitespaces.trim())
console.log(strWithWhitespaces.replace(/\s+/g, ' '))

var char2 = str.charAt(2);
// var char2 = str.charCodeAt(2); // Not very important
console.log(char2)

console.log(str[2])

