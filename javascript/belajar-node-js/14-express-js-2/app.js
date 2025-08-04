const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// menggunakan ejs
// default akan mencari folder views dan bisa diganti
app.set("view engine", "ejs");
// gunakan express layouts
app.use(expressLayouts);

app.get("/", (req, res) => {
  // ejs bisa digunakan untuk megirim array
  const pejabat = [
    {
      nama: "Prabowo",
      email: "prabowo@example.com",
    },
    {
      nama: "Jokowi",
      email: "jokowi@example.com",
    },
    {
      nama: "Anies",
      email: "anies@example.com",
    },
    {
      nama: "Gibran",
      email: "gibran@example.com",
    },
    {
      nama: "Bahlil",
      email: "bahlil@example.com",
    },
  ];
  // cara menggunakan ejs
  // file yang di render harus memiliki ekstensi yang sama dengan view engine
  // kalo ini pake ejs maka file index.ejs
  // parameter pertama adalah nama file, parameter kedua adalah object
  res.render("index", {
    name: "Bahlil", // ini yang nantinya akan diambil dari file index.ejs dengan <%= name %>
    title: "Belajar Node JS (menggunakan EJS)",
    pejabat, // key dan value kalo sama maka bisa ditulis satu saja
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send("product ID: " + req.params.id);
});

app.get("/product/:id/category/:idCategory", (req, res) => {
  res.send(
    "product ID: " + req.params.id + "<br>Category ID: " + req.params.idCategory
  );
});

app.get("/variant/:id", (req, res) => {
  res.send("variant ID: " + req.params.id + "<br>Name: " + req.query.name);
});

app.use((req, res) => {
  res.status(404);
  res.send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
