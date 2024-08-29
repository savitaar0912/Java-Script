var string = 'Internation Business Machines';

var words = string.split(' ')

var acronym = words.map(w => w[0]).join('')

console.log(acronym)
