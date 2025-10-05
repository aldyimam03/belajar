import db from "../db/config/db.js";
import User from "./user.js";

db.define("User", User, {
  tableName: "users",
  timestamps: true,
});

export default db;
