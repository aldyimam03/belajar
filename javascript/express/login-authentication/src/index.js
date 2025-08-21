import express from "express";
import session from "express-session";
import authRoutes from "../src/routes/authRoutes.js";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const localhost = "localhost";
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("public"));
app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key-here', 
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: { 
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 jam
  }
}));

app.get("/", (req, res) => {
  res.send("server is running...");
});
app.use("/", authRoutes);
function run() {
  app.listen(port, () => {
    console.log(`
            ===============================================
                Server running at http://${localhost}:${port}
            ===============================================
            `);
  });
}

run();

export default app;
