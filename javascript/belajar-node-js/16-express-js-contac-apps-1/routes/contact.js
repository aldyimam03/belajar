import express from "express";
import { body, check, validationResult } from "express-validator";
import {
  loadContact,
  addContact,
  findContact,
  findContactByEmail,
  findContactByPhone,
  removeContact,
  updateContact,
  cekDuplikat,
} from "../utils/contacts.js";

const router = express.Router();
// HALAMAN KONTAK
router.get("/", (req, res) => {
  const contacts = loadContact();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact",
    contacts,
    msg: req.flash("msg"),
  });
});

// ADD KONTAK PAGE
router.get("/add", (req, res) => {
  res.render("add-contact", {
    layout: "layouts/main-layout",
    title: "Add Contact",
    errors: [],
  });
});

// ADD KONTAK
router.post(
  "/",
  [
    // cek duplikasi nama
    check("name").custom((value) => {
      const duplikasi = cekDuplikat(value);
      if (duplikasi) {
        throw new Error("Nama sudah terdaftar");
      }
      return true;
    }),
    check("email").isEmail().withMessage("Email Tidak Valid"),
    body("phone")
      .isMobilePhone("id-ID")
      .withMessage("Nomor Telepon Tidak Valid"),
    check("name", "Nama Tidak Boleh Kosong").isLength({ min: 1 }),
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
router.get("/:name", (req, res) => {
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
router.delete("/", (req, res) => {
  const contact = findContact(req.body.name);
  if (!contact) {
    return res.status(404).send("Kontak tidak ditemukan");
  }
  removeContact(req.body.name);
  req.flash("msg", "Contact berhasil dihapus");
  res.redirect("/contact");
});

// EDIT KONTAK PAGE
router.get("/edit/:name", (req, res) => {
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

// EDIT KONTAK LOGIC
router.put(
  "/:name",
  [
    check("name").custom((value, { req }) => {
      if (value !== req.params.name && cekDuplikat(value)) {
        throw new Error("Nama sudah terdaftar");
      }
      return true;
    }),
    check("email").custom((value, { req }) => {
      const contact = findContactByEmail(value);
      if (contact && contact.name !== req.params.name) {
        throw new Error("Email sudah terdaftar");
      }
      return true;
    }),
    check("phone").custom((value, { req }) => {
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

export default router;
