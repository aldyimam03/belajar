const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const { loadContact, findContact } = require("./utils/contact");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(morgan("dev"));

app.use(express.static("public"));

app.use((req, res, next) => {
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
  const contacts = loadContact();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact",
    contacts,
  });
});

app.get("/contact/:name", (req, res) => {
  const contact = findContact(req.params.name);

  if (!contact) {
    return res.status(404).send("Kontak tidak ditemukan");
  }

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Contact",
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
