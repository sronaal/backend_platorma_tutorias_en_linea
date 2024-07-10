import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";
import { Estudiante } from "./estudiantes.model.js";
import { Tutor } from "./tutor.model.js";

export const Tutoria = database.define('tutoria',{


    id:{

        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    
    id_estudiante:{
        type: DataTypes.INTEGER,
        references:{
            model:Estudiante,
            key:'id'
        }
    },
    id_tutor:{
        type: DataTypes.INTEGER,
        references:{
            model:Tutor,
            key:'id'
        }
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull:true
    },

    horaInicio:{
        type: DataTypes.TIME
    },

    horaFin:{
        type: DataTypes.TIME
    },

    estado:{
        type: DataTypes.ENUM(['PROGRAMADA', 'EN CURSO','TERMINADA'])
    },

    calificacion:{
        type: DataTypes.INTEGER
    }
    
    
})