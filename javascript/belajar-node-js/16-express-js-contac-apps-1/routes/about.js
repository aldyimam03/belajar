import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "About",
  });
});

export default router;
