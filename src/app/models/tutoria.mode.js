import { DataTypes } from "sequelize";
import database from "../../database_conexion";
import { Estudiante } from "./estudiantes.model";
import { Tutor } from "./tutor.model";

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
    
    
})