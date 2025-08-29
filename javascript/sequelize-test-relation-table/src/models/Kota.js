import { DataTypes } from "sequelize";

const KotaSchema = {
    kotaId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}

export default KotaSchema;