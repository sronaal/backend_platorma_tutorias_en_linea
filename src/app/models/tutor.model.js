import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";
import { Usuario } from "./usuario.models.js";

export const Tutor = database.define('tutor', {


    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },

    id_usuario:{
        type:DataTypes.INTEGER,
        references:{
             model:Usuario,
             key:'id'
        }
    },
    
    ubicacion:{
        type:DataTypes.STRING
    },

    nivelEducativo:{
        type: DataTypes.STRING
    }
},
{
    createdAt:false,
    updatedAt:false
}
)