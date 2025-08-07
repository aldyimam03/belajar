const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const morgan = require("morgan");
const { body, validationResult, check } = require("express-validator");
const app = express();
const port = 3000;
const {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
  removeContact,
  updateContact,
  findContactByEmail,
  findContactByPhone,
} = require("./utils/contact");

app.set("view engine", "ejs");

// manipulasi method
app.use(methodOverride("_method"));
// express layouts
app.use(expressLayouts);
// morgan
app.use(morgan("dev"));
// static
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// konfigurasi flash
app.use(cookieParser());
app.use(
  session({
    cookie: {
      originalMaxAge: 6000,
    },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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
    msg: req.flash("msg"),
  });
});

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    layout: "layouts/main-layout",
    title: "Add Contact",
    errors: [],
  });
});

// HALAMAN KONTAK

// ADD KONTAK
app.post(
  "/contact",
  [
    // cek duplikasi nama
    check("name").custom((value) => {
      const duplikasi = cekDuplikat(value);
      if (duplikasi) {
        throw new Error("Nama sudah terdaftar");
      }
      return true;
    }),
    check("email").isEmail().withMessage("Email Tidak Valid Anjay"), // pakai check untuk custom message error
    body("phone") // pake body untuk custom message error
      .isMobilePhone("id-ID")
      .withMessage("Nomor Telepon Tidak Valid Anjay"),
    check("name", "Nama Tidak Boleh Kosong Anjay").isLength({ min: 1 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("add-contact", {
        layout: "layouts/main-layout",
        title: "Add Contact",
        errors: errors.array(),
      });
    }
    // tambahkan contact
    addContact(req.body);
    // kirim flash
    req.flash("msg", "Contact berhasil ditambahkan");
    // redirect
    res.redirect("/contact");
  }
);

// DETAIL KONTAK
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

// DELETE KONTAK
app.delete("/contact", (req, res) => {
  const contact = findContact(req.body.name);
  if (!contact) {
    return res.status(404).send("Kontak tidak ditemukan");
  }
  removeContact(req.body.name);
  res.redirect("/contact");
});

// EDIT KONTAK
app.get("/contact/edit/:name", (req, res) => {
  const contact = findContact(req.params.name);
  if (!contact) {
    return res.status(404).send("Kontak tidak ditemukan");
  }
  res.render("edit-contact", {
    layout: "layouts/main-layout",
    title: "Edit Contact",
    contact,
    errors: [],
  });
});

app.put(
  "/contact/:name",
  [
    check("name").custom((value, { req }) => {
      if (value !== req.params.name && cekDuplikat(value)) {
        throw new Error("Nama sudah terdaftar");
      }
      return true;
    }),
    check("email", "Email Tidak Valid").custom((value, { req }) => {
      const contact = findContactByEmail(value);
      if (contact && contact.name !== req.params.name) {
        throw new Error("Email sudah terdaftar");
      }
      return true;
    }),
    check("phone", "Nomor Telepon Tidak").custom((value, { req }) => {
      const contact = findContactByPhone(value);
      if (contact && contact.name !== req.params.name) {
        throw new Error("Nomor telepon sudah terdaftar");
      }
      return true;
    }),
    body("phone", "Nomor Telepon Tidak Valid").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("edit-contact", {
        layout: "layouts/main-layout",
        title: "Edit Contact",
        contact: req.body,
        errors: errors.array(),
      });
    }
    updateContact(req.params.name, req.body);
    req.flash("msg", "Contact berhasil diubah");
    res.redirect("/contact");
  }
);

app.use((req, res) => {
  res.status(404);
  res.send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
