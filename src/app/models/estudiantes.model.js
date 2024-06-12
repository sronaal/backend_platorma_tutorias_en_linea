import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";
import { Usuario } from "./usuario.models.js";

export const Estudiante = database.define('estudiante',{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        references:{
            model:Usuario,
            key:'id'
        }
    },
    grado:{
        type: DataTypes.STRING,
        allowNull:false
    }
})