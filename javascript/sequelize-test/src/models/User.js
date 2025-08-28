import { Sequelize } from "sequelize";
import { DataTypes, Model } from "sequelize";
import { encript } from "../config/bcrypt.js";
import db from "../config/database.js";

// membuat schema dengan cara 1 (define)
// const User = db.define(
//   "User",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "users",
//     timestamps: true,
//   }
// );

// membuat schema dengan cara 2 (model)
// class User extends Model {}

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: db,
//     modelName: "User",
//     tableName: "users",
//     timestamps: true,
//   }
// );

// membuat schema cara 3 yaitu dipisah dengan membuat kerangka sendiri lalu dikumpulkan di satu file
// kerangka : 
const UserSchema = {
    userId:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        validate: {
            isUUID: 4,
        },
        defaultValue: Sequelize.UUIDV4,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    fullName: {
        // fungsi virtual adalah untuk menggabungkan firstName dan lastName
        type: DataTypes.VIRTUAL,
        allowNull: false,
        // penerapan getter
        get() {
            const firstName = this.getDataValue("firstName");
            const lastName = this.getDataValue("lastName");
            return `${firstName} ${lastName}`;
        },
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        set(value) {
            // menyimpan email dalam huruf kecil
            this.setDataValue("email", value.toLowerCase());
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // setidaknya panjang password 8 karakter
            len: [8],
            // harus berupa hash SHA256
            is: /^[0-9a-f]{64}$/,
        },
        // penerapan setter
        set(value) {
            // mengenkripsi password sebelum disimpan ke database menggunakan bcrypt
            this.setDataValue("password", encript(value));
        },
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
};
// file disatukan di models/index.js


// sinkronisasi model dengan database
// db.sync();

export default UserSchema;
