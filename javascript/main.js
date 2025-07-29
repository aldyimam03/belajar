const name = "aldy";

const age = 10;

console.log(`nama saya ${name}, umur saya ${age}`);

// penulisan beberapa statement namun tidak rapi

const longName = "aldy";
const realAge = 22;
console.log(`nama asli saya ${longName}, umur asli saya ${realAge}`); // tanda ; menjadi pengakhir

const id = 123;
let username = "dicoding";

console.log(id);
console.log(username);

let usernameReal = "Dicoding";

console.log("Sebelum diubah:", usernameReal); // output: Sebelum diubah: Dicoding

usernameReal = "dicodingacademy";

console.log("Setelah diubah:", usernameReal); // output: Setelah diubah: dicodingacademy

const usernameFake = "DicodingFake";

console.log("Sebelum diubah:", usernameFake); // output: Sebelum diubah: Dicoding

username = "dicodingacademy"; // TypeError: Assignment to constant variable.

console.log("Setelah diubah:", usernameFake); // Tidak akan pernah dieksekusi

// boleh menggunakan variable yang sama selama dalam fungsi yang berbedas
function printCompanyInfo() {
  const name = "Dicoding"; // <- nama variabel sama
  const legal = "LLC";

  console.log("Company name:", name);
  console.log("Legal type:", legal);
}

function printEmployeeInfo() {
  const name = "John"; // <- nama variabel sama
  const division = "IT";

  console.log("Employee name:", name);
  console.log("Division:", division);
}

printCompanyInfo();
printEmployeeInfo();

/* BOOLEAN */

const completed = true;
const passed = false;

console.log(completed, passed); // output: true false

const isGreater = 5 > 2;

console.log(isGreater); // output: true (5 lebih besar dari 2)

/* NILAI KOSONG ATAU NULL */

let message = null;

console.log(message); // output: null

let message1 = undefined;

console.log(message1); // output: undefined

// Namun, hal ini tidak disarankan. Sebaiknya, gunakan null jika berniat untuk memberikan nilai kosong secara eksplisit.

const name1 = { first: "Dicoding", last: null };
const name2 = { first: "Dicoding", last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}

/* KONVERSI STRING  */

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

/* KONVERSI NUMBER  */

const strNumber1 = "123";
const strFloat = "3.14";
const boolean1 = true;

const numFromString = Number(strNumber1);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean1);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

// parseInt
const cm = "20cm";
const px = "64px";

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

// parseFloat
const cm1 = "20.55cm";
const px1 = "64.23px";

const floatFromCM = parseFloat(cm1);
const floatFromPX = parseFloat(px1);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

/* KONVERSI BOOLEAN  */

const number2 = 123;
const string = "Dicoding";
const empty = null;

const boolFromNumber = Boolean(number2);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false

/* KONVERSI IMPLISIT */

const age3 = 20;
const message3 = "Umurku: " + age3;

console.log(message3); // output: Umurku: 20

const strNumber4 = "123";
const result = strNumber4 * 2;

console.log(result); // output: 246

const bool = true;
const result1 = 1 + bool;

console.log(result1); // output: 2

let age2 = 25;

// Unary operator
typeof age2;

// Binary operator
// 5 + 4;
// 10 / 2;
// age3 = 30;

// Ternary operator (conditional operator)
age3 < 18 ? "You are too young!" : "Welcome onboard!";

// operator
// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log(5 === 5 && 3 < 5); // true

// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(5 === 5 || 3 > 5); // true

// string operator
const first = "bekerja";
const second = "sama";
const merged = first + second;

console.log(merged); // bekerja sama

const currency = "IDR";

let value = 10000;

value += 5000;

console.log(value); // 15000

// const money = currency + " " + value;

const money = `${currency} ${value}`;

const angka1 = 10;
const angka2 = 3;

const hasil = angka1 % angka2;

console.log(hasil); // 1

/* FUNCTION */
function katakanNama(name, umur) {
  // bisa lebih dari 1 parameter dengan tanda koma
  const sapaan = "Halo! " + name;
  console.log(sapaan);
}

katakanNama("aldy"); // Halo! aldy
katakanNama("toni"); // Halo! toni

function tebakHari(hari = "Raya") {
  // default parameter
  console.log("Hari ini adalah hari " + hari);
}

tebakHari("Selasa"); // Hari ini adalah hari Selasa
tebakHari(); // Hari ini adalah hari Raya

// return statement
function sumNumber(a = 5, b = 10) {
  const result = a + b;
  return result;
}

console.log(sumNumber(3, 20)); // 23
console.log(sumNumber); // [Function: sumNumber]
console.log(sumNumber()); // 15

const convertCelciusToFarenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureToFarenheit = convertCelciusToFarenheit(90);
console.log(temperatureToFarenheit); // 194

function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const finalResult = calculate(multiply, 2, 4);
console.log(finalResult); // 8

// multiplier
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10)); // 20
console.log(triple(11)); // 33

// arrow function
let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log("Hasil konversi:", temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log("Hasil konversi:", temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// refactor
let temperatureInFahrenheit1;

// Arrow function
const convertCelsiusToFahrenheit = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit1 = convertCelsiusToFahrenheit(90);
console.log("Hasil konversi:", temperatureInFahrenheit1);

// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) =>
  (9 / 5) * temperature + 32;

temperatureInFahrenheit1 = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log("Hasil konversi:", temperatureInFahrenheit1);

/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
 * 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
 *    "Halo! Nama saya (name). Saya tinggal di (origin)."
 *
 *    Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
 *    "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".
 *
 * 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
 * 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
 * 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
 */

function hello(name, origin = "Bandung") {
  const result = `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
  return result;
}

const rahmat = hello("Rahmat", "Semarang");
const indra = hello("Indra");

console.log(rahmat);
console.log(indra);

// object
const user = {
  firstName: "Aldy",
  lastName: "Imam",
  home: "malang",
  age: 22,
};

console.log(user);
console.log(user.firstName);

console.log(user["home"]); // Output: malang

const userFake = {
  nameFake: "Dicoding",
  lastNameFake: "Indonesia",
  age: 9,
};

const { nameFake, lastNameFake, isMale = false } = userFake;
console.log(nameFake, lastNameFake); // Output: Dicoding Indonesia
console.log(isMale); // Output: false

// object destructuring
const userFakeAgain = {
  idFakeAgain: 24,
  email: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};

const { idFakeAgain, email } = userFakeAgain;

console.log(idFakeAgain, email); // 24 aras@dicoding.com

// tanpa object destructuring
const userNoReal = {
  idNoReal: 24,
  emailNoReal: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};

const idNoReal = user.idNoReal;
const emailNoReal = user.emailNoReal;

console.log(idNoReal, emailNoReal);

// error undefinied
const userUndefinied = { name: "Dicoding" };

console.log(userUndefinied.age); // Output: undefined

// mengubah nilai object
const account = {
  balance: 1000,
  debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000

// menghapus nilai object
const userDelete = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

delete userDelete.age;
console.log(userDelete); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }

// selain menggunakan . kita dapat menggunakan [] // baris 426
const userDeleteAgain = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

delete userDeleteAgain["age"];
console.log(userDeleteAgain); // Output: { name: 'Dicoding', lastName: 'Indonesia' }

// data array
const array = [1, 2];
console.log(typeof array); // Output: object

// membuat array
const users = new Array();
const numbers = new Array(5);

console.log(numbers);

// Menggunakan sintaks Array.from
const foo = Array.from("foo");
console.log(foo); // Output: ['f', 'o', 'o']

// menyalin array
const usersSalin = new Array("John", "Jane", "Jack", "Jill");
const customer = Array.from(usersSalin);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

// array literal
const fruits = ["apple", "banana", "cherry", "", "grape"];
console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']

// mengakses array
const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

// manipulasi array
const myArrays = [1, 2, 3, 4, 5];
myArrays[1] = 10;
console.log(myArrays); // Output: [1, 10, 3, 4, 5]

// array push
const myArrayPush = [1, 2, 3, 4, 5];
myArrayPush.push(6);
console.log(myArrayPush); // Output: [1, 2, 3, 4, 5, 6]

// hapus array
const myArrayDelete = ["Android", "Data Science", "Web"];
delete myArrayDelete[1];

console.log(myArrayDelete); // Output: ['Android', <1 empty item>, 'Web']

// hapus biar gaada tulisan emptynya (menghapus element)
const myArraySplice = ["Android", "Data Science", "Web"];
myArraySplice.splice(1, 1);
console.log(myArraySplice); // Output: ['Android', 'Web']

// hapus element lebih dari 1
const myArrayDeleteElements = ["Android", "Data Science", "Web"];
myArrayDeleteElements.splice(1, 2);
console.log(myArrayDeleteElements); // Output: ['Android'']

// method shift untuk menghapus elemen pertama
const myArrayShift = ["Android", "Data Science", "Web"];
myArrayShift.shift();
console.log(myArrayShift); // Output: ['Data Science', 'Web']

// method pop untuk menghapus elemen terakhir
const myArrayPop = ["Android", "Data Science", "Web"];
myArrayPop.pop();
console.log(myArrayPop); // Output: ["Android", "Data Science"]

// array destructuring
const introduction = ["Hello", "Arsy"];
const [greeting, nameArray] = introduction;
console.log(greeting); // Output: Hello

// array method
// reverse
const myArrayReverse = ["Android", "Data Science", "Web"];
myArrayReverse.reverse();
console.log(myArrayReverse); // Output: [ 'Web', 'Data Science', 'Android'

// sort : mengurutkan dengan kriteria tertentu contoh ascending
const myArraySort = ["Web", "Android", "Data Science"];
myArraySort.sort();
console.log(myArraySort); // Output: [ 'Android', 'Data Science', 'Web' ]

// MAP
const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);

console.log(productMap); // Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250 }

// menyimpan nilai
const map = new Map();
map.set("name", "aras"); // menggunakan method set (key menggunakank string)
console.log(map); // Map(1) { 'name' => 'aras' }

// atau

const mapNumber = new Map();
mapNumber.set(1, "number one"); // key menggunakan number
console.log(mapNumber); // Map(1) { 1 => 'number one' }

// mengakses nilai map
const mapAcces = new Map();
mapAcces.set("name", "aras");
console.log(mapAcces.get("name")); // Output: aras

// delete nilai map
const mapDelete = new Map();
mapDelete.set("name", "aras");
mapDelete.set("last name", "opraza");
mapDelete.delete("last name");
console.log(mapDelete); // Map(1) { 'name' => 'aras' }

// Menstrukturkan Data dengan Set
// membuat set
const mySet = new Set([1, 2, 3]);

console.log(mySet);

// method add dalam set
const set = new Set();
set.add(1);
set.add("Apple");
set.add(1); // tidak dapat diduplikat
set.add("Apple");

console.log(set); // Output: Set { 1, 'Apple' }

// mengakses set menggunakan cara looping
const setLoop = new Set();
setLoop.add(1);
setLoop.add(2);

for (const number of setLoop) {
  console.log(number); // Output: 1, 2
}

// atau foreach
const setForEach = new Set();
setForEach.add(1);
setForEach.add(2);

setForEach.forEach((value) => console.log(value)); // Output: 1, 2

// delete set
const setDelete = new Set();
setDelete.add(1);
setDelete.add(2);
setDelete.delete(1);

console.log(setDelete); // Set(1) { 2 }

// Spread Operator
//object
const obj1 = { name: "Dicoding" };
const obj2 = { lastName: "Indonesia", address: "Jl. Batik Kumeli No 50" };
const newObj = { ...obj1, ...obj2 };

console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }

// berguna untuk menyalin object
const originalObj = { name: "Dicoding", age: 9 };
const copiedObj = { ...originalObj };

console.log(copiedObj); // Output: { name: 'Dicoding', age: 9 }

//array
const array1 = ["Dicoding"];
const array2 = ["Indonesia", "Jl. Batik Kumeli No 50"];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

// berguna untuk menyalin array
const original = ["apple", "banana", "cherry"];
const copy = [...original];

console.log(copy); // Output: ['apple', 'banana', 'cherry']

// rest operator : menggantikan spread operator agar lebih clean code
function myFunc(...manyMoreArgs) {
  console.log("manyMoreArgs", manyMoreArgs);
}

myFunc("one", "two", "three"); // manyMoreArgs [ 'one', 'two', 'three' ]

// Jika ada parameter lain sebelumnya, nilainya tidak menjadi bagian dari array yang dihasilkan rest parameter
function myFuncAgain(number, ...manyMoreArgs) {
  console.log("number", number);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFuncAgain("one", "two", "three"); // number one manyMoreArgs [ 'two', 'three' ]

// array length
function myFuncLength(...manyMoreArgs) {
  console.log(manyMoreArgs.length);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFuncLength("one", "two", "three"); // 3 manyMoreArgs [ 'one', 'two', 'three' ]

// destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array.
const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];

const [firstRest, secondRest, ...rest] = favorites;

console.log(firstRest);
console.log(secondRest);
console.log(rest);

const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  const newEmployees = { name, email, joinYear };
  employees.push(newEmployees);
}

addEmployee("Rahmat", "rahmat@dicoding.com", 2023);
addEmployee("Indra", "indra@dicoding.com", 2022);

console.log(employees);

// for in
const person = { name: "Fulan", origin: "Bandung", birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

//for of
const names = ["Bebek", "Ayam", "Telor", "Tempe"];

for (const item of names) {
  console.log(item);
}

//while
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

// error handling
// const error = new Error("Terjadi error");
// console.error(error);

// const price = 100;
// const paid = 80;

// if (paid < price) {
//   throw new Error("Pembayaran kurang");
// }

//try catch
// try {
//   console.log('Memulai program');
//   console.log('Mengakhiri program');
// } catch (err) {
//   console.log('Karena tidak ada error, blok ini akan diabaikan');
// }

// try {
//   console.log("Memulai program");
//   throw new Error("Error: Program berhenti");
//   console.log("Mengakhiri program");
// } catch (err) {
//   console.log("Karena ada error, blok ini akan dieksekusi");
// }

function categorizeNumber(input) {
  /**
   * TODO:
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error.
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   */
  function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  if (typeof input !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  } else if (input < 0) {
    return "Negatif";
  } else if (isPrime(input)) {
    return "Prima";
  } else if (input === 0) {
    return "Nol";
  } else if (input % 2 === 0) {
    return "Genap";
  } else if (input % 2 === 1) {
    return "Ganjil";
  }
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
