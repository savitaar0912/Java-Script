console.log("Understanding DOM");
let a = document;
a = document.all;
// a = document.html;
// a = document.body;
// a = document.forms;
// Array.from(a).forEach(function(element){
//     console.log(element);
// });
// Array.from(a).forEach(element => {
//     console.log(element);
// });
// Array(a).forEach(element => {
//     console.log(element);    
// });
// a = document.links
// a = document.links[2]

// EXERCISE 1
let sc="instagram"
a = document.links
// Array.from(a).forEach(function(element){
//     if(element.href.includes(sc))
//         console.log(element);
// })
// OTHER METHOD
// let b = Array.from(a)
// for(i of b){
//     if(i.href.includes("instagram")){
//         console.log(i);
//     }
// }
// GIVES ONLY THE PLACE OF LINK IN NUMBERS
// let b = Array.from(a)
// for(i in b){
//     if(b[i].href.includes("instagram")){
//         console.log(i);
//     }
// }

console.log(a);