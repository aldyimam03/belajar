import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
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
    layout: "layouts/main-layout",
    name: "Bahlil",
    title: "Belajar Node JS (menggunakan EJS)",
    pejabat,
  });
});

export default router;