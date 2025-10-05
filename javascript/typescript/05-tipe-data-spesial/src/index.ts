// type data spesial

// void
// tipe data void biasanya digunakan pada function yang tidak mengembalikan nilai apapun
function sayHello(): void {
  console.log("Ini adalah function dengan tipe data void");
}
sayHello();

// any
let random: any = 10;
console.log(random);
random = "Hello";
console.log(random);
random = true;
console.log(random);

// unknown
let w: unknown = 10;
console.log(w);
w = "Hello";
console.log(w);
w = true;
console.log(w);

// beda any dan unknown adalah pada operasi dengan tipe data lain
let a: any = 10;
let u: unknown = 20;
console.log(a + u); // tidak error karena any bisa dioperasikan dengan tipe data apapun

// console.log(u + a); // error karena unknown tidak bisa dioperasikan dengan tipe data apapun kecuali di-casting terlebih dahulu
if (typeof u === "number") {
  console.log(u + a); // tidak error karena sudah di-casting terlebih dahulu
}

// never
// tipe data never biasanya digunakan pada function yang tidak pernah mengembalikan nilai apapun
// function error(): never {
//   throw new Error("Error");
// }
// error();
