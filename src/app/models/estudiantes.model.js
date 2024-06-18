import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";
import { Usuario } from "./usuario.models.js";

export const Estudiante = database.define('estudiante', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },

    grado: {
        type: DataTypes.STRING,
        allowNull: null
    },

    preferencias:{
        type: DataTypes.JSON()
    },

    discapacidad:{
        type: DataTypes.JSON()
    }


}, {
    createdAt: false,
    updatedAt: false
})