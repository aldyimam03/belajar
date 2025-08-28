import db from "../config/database.js";
import UserSchema from "./User.js";

// Membuat model User
const User = db.define("User", UserSchema, {
  tableName: "users",
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ["email"],
    },
  ],
});

// Mengumpulkan semua model
const models = {
  User, 
  sequelize: db, 
};

// Sinkronisasi model dengan database
db.sync();

export default models;
export { User };