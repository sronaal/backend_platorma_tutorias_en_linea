import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";
import { Usuario } from "./usuario.models.js";


export const Administrador = database.define('Administrador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    id_usuario:{
        type:DataTypes.INTEGER,
        references:{
             model:Usuario,
             key:'id'
        }
    },

    departamento: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    createdAt:false,
    updatedAt:false
}
);