jsonobj = {
    names: ['Shasha', 'shiv', 'san', 'shub'],
    foods: ['momos', 'rolls', 'shake', 'drinks'],
    home: 'kanpur',
    drink: 'MC float',
    deal: 'Meal',
}
// console.log(jsonobj)

// convert to str 
let strobj = JSON.stringify(jsonobj)
console.log(strobj)

// replace in str
strobj = strobj.replace('kanpur', 'India')
console.log(strobj)

// back to json obj 
newobj = JSON.parse(strobj)
console.log(newobj)
