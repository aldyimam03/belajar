import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./config/database.js";
import models, { User } from "./models/index.js";
import { Op } from "sequelize";
import e from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/users", async (req, res) => {
  try {
    const users = await models.User.findAll();

    // --- RAW QUERY ---
    // harus sama dengan nama columns
    // const users = await models.sequelize.query(
    //   "SELECT * FROM users",
    //   // type digunakan untuk menentukan jenis query
    //   { type: models.sequelize.QueryTypes.SELECT }
    // );

    // const users = await models.sequelize.query("SELECT * FROM users", {
    //   // agar hasil query dipetakan ke model User
    //   model: models.User,
    //   mapToModel: true,
    // });

    // const users = await models.sequelize.query("SELECT 1 as 'foo.bar.baz'", {
    //   // nest digunakan untuk mengelompokkan hasil query sesuai dengan hierarki
    //   nest: true,
    //   type: models.sequelize.QueryTypes.SELECT,
    // });

    // const users = await models.sequelize.query(
    //   "SELECT * from users where isActive = ?",
    //   {
    //     // replacements digunakan untuk mengganti placeholder ? dengan nilai yang sesuai
    //     replacements: [true],
    //     type: models.sequelize.QueryTypes.SELECT,
    //   }
    // );

    // const users = await models.sequelize.query(
    //   `SELECT *, "text with literal $$1 and literal $$status" from users where isActive = $status`,
    //   {
    //     // bind digunakan untuk mengganti placeholder $status dengan nilai yang sesuai
    //     bind: { status: true },
    //     type: models.sequelize.QueryTypes.SELECT,
    //   }
    // );

    // --- QUERY finder ---
    // SELECT * FROM Users WHERE UserId = 1
    // const users = await models.User.findByPk(1);

    // --- QUERY findOne ---
    // SELECT * FROM Users WHERE email = 'user1@example.com'
    // hanya akan ditampilkan 1 data
    // const users = await models.User.findOne({
    //   where: {
    //     email: "user1@example.com",
    //   },
    // });

    // --- QUERY findOrCreate ---
    // SELECT * FROM Users WHERE email = 'user1@example.com'
    // jika tidak ada, maka akan dibuatkan data baru
    // const users = await models.User.findOrCreate({
    //   where: {
    //     email: "user4@example.com",
    //   },
    //   defaults: {
    //     name: "User 4",
    //     password: "securepassword",
    //   },
    // });

    // --- QUERY findAndCountAll ---
    // SELECT * FROM Users WHERE email = 'user4@example.com'
    // digunakan untuk menghitung jumlahnya
    // let users = await models.User.findAndCountAll({
    //   where: {
    //     [Op.and]: [
    //       { userId: { [Op.in]: [1, 2, 4] } },
    //       { email: { [Op.like]: "%user%" } },
    //     ],
    //   },
    // });

    // --- QUERY findAll() ---
    // const users = await models.User.findAll(
    // digunakan untuk memilih atribut yang ingin ditampilkan
    // SELECT UserId, name, email FROM Users
    // { attributes: ["UserId", "name", "email"] }

    // kita bisa menambahkan alias sjuga seperti UserId as id
    // SELECT UserId as id, name, email FROM Users
    // { attributes: [["UserId", "id"], "name", "email"] }

    // misal melakukan count terus as a jumlah
    // SELECT COUNT(UserId) as jumlah FROM Users
    // {
    //   attributes: [
    //     "UserId",
    //     [
    //       models.sequelize.fn("COUNT", models.sequelize.col("UserId")),
    //       "jumlah",
    //     ],
    //   ],
    //   group: ["UserId"],
    // }

    // penggunaan where cara 1
    // SELECT * FROM Users WHERE name = 'User 1'
    // { attributes: ["UserId", "name", "email"], where: { name: "User 1" } }

    // penggunaan where cara 2
    // SELECT * FROM Users WHERE email = 'user1@example.com'
    // {
    //   attributes: ["UserId", "name", "email"],
    //   where: {
    //     email: {
    //       [Op.eq]: "user1@example.com",
    //     },
    //   },
    // }

    // penggunaan where cara 3 disertai and
    // SELECT UserId, email FROM Users WHERE email = 'user2@example.com' AND UserId = 2
    // {
    //   attributes: ["UserId", "email"],
    //   where: {
    //     email: "user2@example.com",
    //     UserId: 2,
    //   },
    // }

    // penggunaan where cara 4 disertai and dengan operator
    // SELECT UserId, email FROM Users WHERE email = 'user2@example.com' AND UserId = 2
    // {
    //   attributes: ["UserId", "email"],
    //   where: { [Op.and]: [{ email: "user3@example.com" }, { UserId: 3 }] },
    // }

    // penggunaan where cara 4 disertai and dengan operator
    // SELECT UserId, name, email FROM Users WHERE email = 'user3@example.com' OR UserId = 2 OR UserId = 1
    // {
    //   attributes: ["UserId", "name", "email"],
    //   where: {
    //     [Op.or]: [
    //       { email: "user3@example.com" },
    //       { UserId: 2 },
    //       { UserId: 1 },
    //     ],
    //   },
    // }

    // penggunaan where cara 4 disertai and dengan operator
    // SELECT UserId, name, email FROM Users WHERE email = 'user3@example.com' OR email = 'user1@example.com'
    // {
    //   attributes: ["UserId", "name", "email"],
    //   where: {
    //     email: { [Op.or]: ["user3@example.com", "user1@example.com"] },
    //   },
    // }

    // penggunaan where cara 4 disertai and dengan operator
    // SELECT UserId, name, email FROM Users WHERE userId in (1, 2) like '%user%'
    // {
    //   attributes: ["UserId", "name", "email"],
    //   where: {
    //     UserId: { [Op.in]: [1] },
    //     [Op.and]: [
    //       { email: { [Op.like]: "%user%" } },
    //     ],
    //   },
    // }
    // );
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/insert", async (req, res) => {
  try {
    // membuat 1 user
    // User.create({
    //   name: "Toni",
    //   email: "toni@example.com",
    //   password: "securepassword",
    // }
    // membuat beberapa user
    //
    const data = await User.bulkCreate([
      {
        firstName: "User 1",
        lastName: "Last Name User 1",
        username: "user1",
        age: 20,
        email: "USER1@EXAMPLE.COM",
        password: "securepassword",
        isActive: true,
      },
      {
        firstName: "User 2",
        lastName: "Last Name User 2",
        username: "user2",
        age: 21,
        email: "USER2@EXAMPLE.COM",
        password: "securepassword",
        isActive: true,
      },
      {
        firstName: "User 3",
        lastName: "Last Name User 3",
        username: "user3",
        age: 20,
        email: "USER3@EXAMPLE.COM",
        password: "securepassword",
        isActive: true,
      },
    ]);
    res.status(201).json({ message: "Users created successfully", data });
  } catch (error) {
    console.error("Error inserting user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, async () => {
  try {
    await testConnection();
    console.log(`✅ Database connected successfully`);
  } catch (err) {
    console.error("❌ Unable to connect to the database:", err);
  }
  console.log(`🚀 Server running at http://localhost:${port}`);
});
