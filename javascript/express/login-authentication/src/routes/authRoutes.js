import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.send("test");
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    layout: "layout",
    title: "Signup",
    message: "",
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    layout: "layout",
    title: "Login",
    message: "",
  });
});

const Users = [];

router.post("/signup", (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400);
    const data = {
      title: "Signup",
      layout: "layout",
      message: "Please fill out all fields.",
    };
    return res.render("signup", data);
  }

  const existingUser = Users.find(
    (user) =>
      user.username === req.body.username || user.email === req.body.email
  );

  if (existingUser) {
    return res.status(400).render("signup", {
      title: "Signup",
      layout: "layout",
      message:
        existingUser.username === req.body.username
          ? "Username already exists."
          : "Email already exists.",
    });
  }

  Users.push({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  console.log(Users);
  res.redirect("/login");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).render("login", {
      title: "Login",
      layout: "layout",
      message: "Please enter username and password !",
    });
  }

  const user = Users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(400).render("login", {
      title: "Login",
      layout: "layout",
      message: "Invalid username or password !",
    });
  }

  // Set session
  req.session.user = user;
  console.log("Login successful - User:", user);
  console.log("Session after setting user:", req.session);

  res.redirect("/dashboard");
});

router.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  res.render("dashboard", {
    layout: "layout",
    title: "Dashboard",
    user: req.session.user, 
  });
});

router.use((req, res) => {
  res.status(404).send("Not Found");
});

export default router;
