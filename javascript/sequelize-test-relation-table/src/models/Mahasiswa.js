import { DataTypes } from "sequelize";

const MahasiswaSchema = {
    mahasiswaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}

export default MahasiswaSchema;