// imperatif 
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// deklaratif
const namesAgain = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMarkAgain = namesAgain.map((name) => `${name}!`);

console.log(newNamesWithExcMarkAgain); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]