import { DataTypes } from "sequelize";
import database from "../../database_conexion.js";
import { Tutor } from "./tutor.model.js";
import { Materia } from "./materia.model.js";


export const TutorMateria = database.define('TutorMateria', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    
    tutorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Tutor,
            key: 'id'
        },
        allowNull: false
    },
    materiaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Materia,
            key: 'id'
        },
        allowNull: false
    }
},{
    createdAt:false,
    updatedAt:false
});