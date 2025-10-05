// menambahkan anotation pada variable

// cara 1
let nama: string = "Aldy";
console.log(nama);

// cara 2
let umur: number;
umur = 20;
console.log(umur);

// menambahkan anotation pada function
function tambah(a: number, b: number): number {
  return a + b;
}

console.log(tambah(10, 20));

// menambahkan anotation pada object
let mobil: { merk: string; tahun: number } = {
  merk: "Toyota",
  tahun: 2020,
};

console.log(mobil.merk);
console.log(mobil.tahun);
console.log(mobil);

// menambahkan anotation pada array
//contoh 1
let angka: number[] = [1, 2, 3, 4, 5];
console.log(angka);

//contoh 2
let hewan: string[] = ["🐶", "🐱", "🐭", "🐹"];
console.log(hewan);
console.log(hewan[0]);
console.log(hewan[1]);
console.log(hewan[2]);
console.log(hewan[3]);

// menambahkan anotation pada multi dimensi array
let array: (string | number)[][] = [
  ["Aldy", 20],
  ["Joko", 18],
  ["Dina", 50],
  ["Xena", 60],
];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// menambahkan anotation pada tuple
let biodata: [string, number, boolean] = ["Aldy", 20, true];
console.log(biodata);
console.log(biodata[0]);
console.log(biodata[1]);
console.log(biodata[2]);

// menambahkan anotation any pada variable
// variable dengan tipe data any bisa diisi dengan tipe data apapun
// tidak direkomendasikan menggunakan tipe data any kecuali dalam kondisi tertentu, contohnya ketika mengambil data dari API yang tidak diketahui tipe datanya

// contoh 1
let random: any = 20;
console.log(random);

// contoh 2
random = "Hello";
console.log(random);

// contoh 3
let boolean: any = true;
console.log(boolean);

// menambahkan anotation pada function dengan tipe data void
// function dengan tipe data void tidak mengembalikan nilai apapun
// biasanya digunakan pada function yang hanya melakukan aksi tanpa mengembalikan nilai

// contoh 1
function hello(): void {
  console.log("Hello World");
}
hello();

// contoh 2
function hello2(): void {
  console.log("Hello World 2");
  // return "Hello"; // error
}
hello2();

// menambahkan anotation pada function dengan tipe data never
// function dengan tipe data never tidak pernah mengembalikan nilai apapun
// biasanya digunakan pada function yang selalu melempar error atau function yang tidak pernah selesai

// contoh 1
// function error(): never {
//   throw new Error("Error");
// }
// error();

// contoh 2
// function infiniteLoop(): never {
//   while (true) {
//     console.log("Hello");
//   }
// }
// infiniteLoop();

// menambahkan anotation pada function dengan tipe data optional
// function dengan tipe data optional adalah function yang memiliki parameter opsional
// parameter opsional ditandai dengan tanda tanya (?) setelah nama parameternya

// contoh 1
function tambah2(a: number, b?: number): number {
  if (b) {
    return a + b;
  } else {
    return a;
  }
}
console.log(tambah2(10));
console.log(tambah2(10, 20));
