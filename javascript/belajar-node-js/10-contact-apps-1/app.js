// KASUS INI MENGGUNAKAN CALLBACK SEHINGGA MENYEBABKAN CALLBACK HELL

// import core module
// const fs = require("fs");
// const readline = require("readline");

// // inisialisasi readline
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // pertanyaan
// rl.question("Masukkan nama: ", (name) => {
//   rl.question("Masukkan email: ", (email) => {
//     rl.question("Masukkan nomor telepon: ", (phone) => {
//       console.log(`Nama: ${name}`);
//       console.log(`Email: ${email}`);
//       console.log(`Nomor Telepon: ${phone}`);

//       // cek apakah file contacts.json sudah ada
//       if (!fs.existsSync("contacts.json")) {
//         fs.writeFileSync("contacts.json", "[]", "utf-8");
//       }

//       // baca file
//       const contacts = JSON.parse(fs.readFileSync("contacts.json", "utf-8"));

//       // simpan data
//       contacts.push({ name, email, phone });
//       fs.writeFileSync("contacts.json", JSON.stringify(contacts), "utf-8");

//       // akhir program
//       rl.close();
//     });
//   });
// });

// kasus diatas akan menyebabkann callback hell
// untuk menangani hal tersebut kita membutuhkan async await
// namun async await hanya bisa digunakan ketika kasus diatas berbentuk promise (kasus diatas tidak berbentuk promise)

// KASUS DIBAWAH INI MENGGUNAKAN PROMISE

// // import core module
// const fs = require("fs");
// const readline = require("readline");

// // inisialisasi readline
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // cek apakah file contacts.json sudah ada
// if (!fs.existsSync("contacts.json")) {
//   fs.writeFileSync("contacts.json", "[]", "utf-8");
// }

// // pertanyaan 1
// const pertanyaan1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan nama: ", (name) => {
//       resolve(name);
//     });
//   });
// };

// // pertanyaan 2
// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan email: ", (email) => {
//       resolve(email);
//     });
//   });
// };

// // pertanyaan 3
// const pertanyaan3 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan nomor telepon: ", (phone) => {
//       resolve(phone);
//     });
//   });
// };

// const main = async () => {
//   const name = await pertanyaan1();
//   const email = await pertanyaan2();
//   const phone = await pertanyaan3();

//   const data = {
//     name,
//     email,
//     phone,
//   };

//   const contacts = JSON.parse(fs.readFileSync("contacts.json", "utf-8"));
//   contacts.push(data);
//   fs.writeFileSync("contacts.json", JSON.stringify(contacts), "utf-8");

//   // cek apakah data sukes disimpan
//   if (!contacts) {
//     return console.log("data gagal disimpan");
//   } else {
//     console.log("data berhasil disimpan");
//   }

//   console.log("terima kasih sudah mengisi data");

//   rl.close();
// };

// main();

// kasus diatas menggunakan promise, namun pertanyaan bisa sangat banyak, agar lebih hemat maka pertanyaan bisa dijadikan function

// const contact = require("./contact");
// const main = async () => {
//   const name = await contact.tulisPertanyaan("Masukkan nama: ");
//   const email = await contact.tulisPertanyaan("Masukkan email: ");
//   const phone = await contact.tulisPertanyaan("Masukkan nomor telepon: ");

//   contact.simpanContact(name, email, phone);
// };

const {tulisPertanyaan, simpanContact} = require("./contact");
const main = async () => {
  const name = await tulisPertanyaan("Masukkan nama: ");
  const email = await tulisPertanyaan("Masukkan email: ");
  const phone = await tulisPertanyaan("Masukkan nomor telepon: ");

  simpanContact(name, email, phone);
};

main();