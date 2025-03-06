// async
// const fs = require("fs");

// const fileReadCallback = (error, data) => {
//   if (error) {
//     console.log("Gagal membaca berkas");
//     return;
//   }
//   console.log(data);
// };

// fs.readFile("todo.txt", "UTF-8", fileReadCallback);

// synchronous
const fs = require("fs");

const data = fs.readFileSync("notes.txt", "UTF-8");
console.log(data);
