import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";
import { Usuario } from "./usuario.models.js";
import { Disponibilidad } from "./disponibilidad.model.js";


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
 
    id_disponibilidad: {
        type: DataTypes.INTEGER,
        references: {
            model: Disponibilidad,
            key:'id'
        }
    },

    ubicacion:{
        type:DataTypes.STRING
    },

    nivelEducativo:{
        type: DataTypes.STRING
    },

    profesion:{
        type: DataTypes.JSON()
    }

},
{
    createdAt:false,
    updatedAt:false
}
)