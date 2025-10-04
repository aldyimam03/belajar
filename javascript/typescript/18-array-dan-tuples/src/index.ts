// array 
// cara membuat array
let fruits: string[] = ["Apple", "Banana", "Orange"];
let numbers: number[] = [1, 2, 3, 4, 5];
let booleans: boolean[] = [true, false, true];

// mengakses array
console.log(fruits[0]); // Apple
console.log(numbers[1]); // 2
console.log(booleans[2]); // true

// array generic 
let cars: Array<string> = ["Toyota", "Honda", "Suzuki"];
console.log(cars[1]); // Honda

// array kurang direkomendasikan
let anything: any[] = [1, "Aldy", true, { name: "Aldy" }, [1, 2, 3]];
console.log(anything[3]); // { name: "Aldy" }

let arr = [1, "Aldy", true, { name: "Aldy" }, [1, 2, 3]];
console.log(arr[4]); // [1, 2, 3]

let animal: Array<string>;
animal = ["Cat", "Dog", "Bird"];
console.log(animal[0]); // Cat

// array or 
let  values: (string | number)[];
values = ["Aldy", 20, "Budi", 25];
console.log(values[1]); // 20
console.log(values[3]); // 25

// generic or
let things: Array<string | number>;
things = ["Aldy", 20, "Budi", 25];
console.log(things[0]); // Aldy
console.log(things[2]); // Budi
console.log(things[1]); // 20

// mengakses array dengan looping
let hero : string[] = ["Aldy", "Budi", "Caca"];
for(let i = 0; i < hero.length; i++) {
  console.log(hero[i]);
}

for(let h of hero) {
  console.log(h);
}

//metode pada array
let buah: string[] = ["Apple", "Banana", "Orange"];
buah.push("Mango"); // menambahkan elemen di akhir array
console.log(buah); // ["Apple", "Banana", "Orange", "Mango"]
buah.pop(); // menghapus elemen di akhir array
console.log(buah); // ["Apple", "Banana", "Orange"]
buah.shift(); // menghapus elemen di awal array
console.log(buah); // ["Banana", "Orange"]
buah.unshift("Apple"); // menambahkan elemen di awal array
console.log(buah); // ["Apple", "Banana", "Orange"]
buah.splice(1, 1); // menghapus elemen di index 1
console.log(buah); // ["Apple", "Orange"]
buah.splice(1, 0, "Banana"); // menambahkan elemen di index 1
console.log(buah); // ["Apple", "Banana", "Orange"]
buah.splice(1, 1, "Grapes"); // menghapus elemen di index 1 dan menambahkan elemen baru
console.log(buah); // ["Apple", "Grapes", "Orange"]
buah.length; // menghitung panjang array
console.log(buah.length); // 3
buah.indexOf("Grapes"); // mencari index dari elemen
console.log(buah.indexOf("Grapes")); // 1
buah.includes("Orange"); // mengecek apakah elemen ada di dalam array
console.log(buah.includes("Orange")); // true
buah.reverse(); // membalik urutan elemen di dalam array
console.log(buah); // ["Orange", "Grapes", "Apple"]
buah.sort(); // mengurutkan elemen di dalam array
console.log(buah); // ["Apple", "Grapes", "Orange"]
buah.concat(["Mango", "Pineapple"]); // menggabungkan dua array
console.log(buah.concat(["Mango", "Pineapple"])); // ["Apple", "Grapes", "Orange", "Mango", "Pineapple"]
let newFruits: string[] = buah.slice(1, 3); // mengambil sebagian elemen dari array
console.log(newFruits); // ["Grapes", "Orange"]
let allFruits: string = buah.join(", "); // menggabungkan elemen di dalam array menjadi string
console.log(allFruits); // "Apple, Grapes, Orange"

// tuples adalah array yang memiliki tipe data yang berbeda-beda pada setiap elemennya

let person1: [string, number, boolean] = ["Aldy", 20, true];
console.log(person1); // ["Aldy", 20, true]
console.log(person1[0]); // Aldy
console.log(person1[1]); // 20
console.log(person1[2]); // true

// array tuples
let person2: [string, number, boolean][];
person2 = [
  ["Aldy", 20, true],
  ["Budi", 25, false],
  ["Caca", 30, true], 
];
console.log(person2);
console.log(person2[0]); // ["Aldy", 20, true]


for (let p of person2) {
  console.log(p);
}

//readonly tuples
let person3: readonly [string, number] = ["Aldy", 20];
console.log(person3);
console.log(person3[0]); // Aldy
console.log(person3[1]); // 20
// person3[0] = "Budi"; // error karena readonly
// person3.push(25); // error karena readonly

// labelled tuples
let person4: [name: string, age: number, isMarried: boolean] = ["Aldy", 20, true];
console.log(person4);
console.log(person4[0]); // Aldy

// ...rest parameter pada tuples adalah fitur yang memungkinkan kita untuk membuat tuples dengan jumlah elemen yang tidak tetap
// ...rest parameter pada tuples harus diletakkan di akhir deklarasi tuples
// ...rest parameter pada tuples hanya boleh memiliki satu ...rest parameter
let person5: [string, ...number[]] = ["Aldy", 20, 25, 30, 35];
console.log(person5);
console.log(person5[0]); // Aldy