import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";

export const Rol = database.define('roles',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        
    },

    rol:{

        type: DataTypes.STRING,
        allowNull:true
    }
}, {
    createdAt:false,
    updatedAt:false,

})

