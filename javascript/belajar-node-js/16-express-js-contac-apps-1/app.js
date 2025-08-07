import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
import methodOverride from "method-override";
import morgan from "morgan";

import indexRoutes from "./routes/index.js";
import aboutRoutes from "./routes/about.js";
import contactRoutes from "./routes/contact.js";

const app = express();
const port = 3000;

// ✅ View Engine
app.set("view engine", "ejs");

// ✅ Middleware
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(session({
  cookie: {
    maxAge: 6000, // lebih umum pakai maxAge
  },
  secret: "secret",
  resave: false, // disarankan false
  saveUninitialized: false, // disarankan false
}));
app.use(flash());

// ✅ Middleware untuk inject flash ke semua view
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  next();
});

// ✅ Routing
app.use("/", indexRoutes);
app.use("/about", aboutRoutes);
app.use("/contact", contactRoutes);

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).render("404", {
    layout: "layouts/main-layout",
    title: "404 Not Found",
  });
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
