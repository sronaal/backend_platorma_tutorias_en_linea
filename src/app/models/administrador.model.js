import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";
import { Usuario } from "./usuario.models.js";


export const Administrador = database.define('Administrador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: false
    }
});