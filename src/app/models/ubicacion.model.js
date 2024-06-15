import { DataTypes, STRING } from "sequelize";
import database from "../../database_conexion.js";

export const Ubicacion = database.define('ubicacion_greografica', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },

    pais:{
        type: DataTypes.STRING,
        allowNull:true
    },
    ciudad:{
        type: DataTypes.STRING,
        allowNull:true
        
    },

    direccion:{
        type:STRING
    }
})