import db from "../config/database.js";
import UserSchema from "./User.js";
import PenjualSchema from "./Penjual.js";
import KotaSchema from "./Kota.js";
import AuthorSchema from "./Author.js";
import PostSchema from "./Post.js";
import MahasiswaSchema from "./Mahasiswa.js";
import MataKuliahSchema from "./MataKuliah.js";

// ------------------------------------------------------------------------

const Penjual = db.define("Penjual", PenjualSchema, {
  tableName: "penjual",
  underscored: true,
});

const Kota = db.define("Kota", KotaSchema, {
  tableName: "kota",
  underscored: true,
});

// Relasi one to one (1 penjual memiliki 1 kota)
Kota.hasOne(Penjual, {
  foreignKey: "kotaId",
  // RESTRICT digunakan untuk mencegah penghapusan data kota jika masih ada penjual yang terkait
  // CASCADE digunakan untuk menghapus data penjual jika data kota dihapus
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

Penjual.belongsTo(Kota, {
  foreignKey: "kotaId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

// ------------------------------------------------------------------------

const Author = db.define("Author", AuthorSchema, {
  tableName: "authors",
  underscored: true,
});

const Post = db.define("Post", PostSchema, {
  tableName: "posts",
  underscored: true,
});

// Relasi one to many (1 author memiliki banyak post)
Author.hasMany(Post, {
  foreignKey: "authorId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

Post.belongsTo(Author, {
  foreignKey: "authorId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

// ------------------------------------------------------------------------

const Mahasiswa = db.define("Mahasiswa", MahasiswaSchema, {
  tableName: "mahasiswa",
  underscored: true,
});

const MataKuliah = db.define("MataKuliah", MataKuliahSchema, {
  tableName: "mata_kuliah",
  underscored: true,
});

// Relasi many to many (1 mahasiswa memiliki banyak mata kuliah)
Mahasiswa.belongsToMany(MataKuliah, {
  through: "mahasiswa_mata_kuliah",
  foreignKey: "mahasiswaId",
  otherKey: "mataKuliahId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

MataKuliah.belongsToMany(Mahasiswa, {
  through: "mahasiswa_mata_kuliah",
  foreignKey: "mataKuliahId",
  otherKey: "mahasiswaId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

// ------------------------------------------------------------------------

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
export { User, Penjual, Kota, Author, Post, Mahasiswa, MataKuliah };
