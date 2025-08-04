// menggunakan express

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");
  // response json
  // res.json({
  //   name: "John Doe",
  //   email: "J5oV7@example.com",
  //   phone: "08123456789"
  // });

  // untuk mengirim file bisa menggunakan sendFile contoh file html
  // fungsi __dirname mengembalikan path ke direktori aplikasi
  // tanda . digunakan untuk memanggil file di direktori tersebut (./ = di direktori aplikasi)
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

//menggunakan 1 parameter (id)
app.get("/product/:id", (req, res) => {
  res.send("product ID: " + req.params.id);
});

// menggunakan 2 parameter (id dan idCategory)
app.get("/product/:id/category/:idCategory", (req, res) => {
  res.send("product ID: " + req.params.id + "<br>Category ID: " + req.params.idCategory);
});

//menggunakan 2 parameter (id dan query)
app.get("/variant/:id", (req, res) => {
  // name digunakan untuk penampungan query contoh : http://localhost:3000/variant/1?name=abc
  res.send("variant ID: " + req.params.id + "<br>Name: " + req.query.name); 
});

// route default (berguna untuk menangani request yang tidak ditemukan)
// tidak boleh ditaruh paling atas karna semua request setelah 
// route default tidak akan dijalankan karna dianggap tidak ditemukan sehingga tidak bisa diakses
app.use((req, res) => {
  res.status(404);
  res.send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
