const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// third-party middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// built-in middleware
app.use(express.static("public"));

// application level middleware
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req, res) => {
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
  res.render("index", {
    layout: "index.ejs",
    name: "Bahlil",
    title: "Belajar Node JS (menggunakan EJS)",
    pejabat,
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
