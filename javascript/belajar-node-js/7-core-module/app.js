const fs = require("fs");

// menuliskan file secara sinkronus
// try {
//   fs.writeFileSync("hello.txt", "Hello World!");
// } catch (error) {
//   console.log(error);
// }

// menuliskan file secara asinkronus
// fs.writeFile("hello.txt", "Hello World!", (error) => {
//     if (error) {
//         console.log(error);
//     }
// });

// membaca file secara sinkronus
// try {
//   const data = fs.readFileSync("hello.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// membaca file secara asinkronus
// fs.readFile("hello.txt", "utf-8", (error, data) => {
//   //ternary
//   console.log(error ? error : data);
// });

// readline
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Masukkan nama: ", (name) => {
//   rl.question("Masukkan umur: ", (age) => {
//     console.log(`Halo ${name}`);
//     console.log(`Umur kamu ${age}`);
//     rl.close();
//   });
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama: ", (name) => {
  rl.question("Masukkan umur: ", (age) => {
    const filePath = "package.json";
    let data = {};

    // Baca file kalau sudah ada
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8").trim();
        if (fileContent) {
          data = JSON.parse(fileContent);
        }
      } catch (err) {
        console.error("Gagal membaca file, membuat data baru...");
        data = {};
      }
    }

    // Tambahkan data baru
    data = {
      nama: name,
      umur: Number(age),
    };

    // Simpan kembali ke file
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log("Data berhasil disimpan ke package.json");
    } catch (error) {
      console.error("Gagal menyimpan file:", error);
    }

    rl.close();
  });
});
