/* 
Fungsi yang Mengubah Data (Mutator Function): 

1. Array.push: menambahkan elemen di akhir dari sebuah array.
2. Array.pop: menghapus elemen terakhir dari sebuah array.
3. Array.shift: menghapus elemen pertama dari sebuah array.
4. Array.unshift: menambahkan elemen di awal dari sebuah array.
5. Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
6. Array.reverse: membalikkan urutan elemen dari sebuah array.
7. Array.sort: mengurutkan elemen dari sebuah array.
8. Object.assign: memodifikasi properti dari object. 
*/

function max(arrayOfNumbers) {
  return arrayOfNumbers.sort((a, b) => a - b).pop();
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]


function maxAgain(arrayOfNumber) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
  return [...arrayOfNumber].sort((a, b) => a - b).pop();
}

function registerEmailAgain(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}

const numbersAgain = [10, 23, 24, 7, 42, 18];
const largestAgain = maxAgain(numbersAgain);

console.log(largestAgain); // Output: 42
console.log(numbersAgain); // Output: [ 10, 23, 24, 7, 42, 18 ]

const personAgain = {
  name: "John",
  username: "johndoe",
};

const personWithEmailAgain = registerEmailAgain(
  personAgain,
  "john@dicoding.com"
);

console.log(personAgain); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmailAgain); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
