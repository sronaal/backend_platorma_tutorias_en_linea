import { DataTypes } from "sequelize";
import database from '../../database_conexion.js'
import { Tutor } from "./tutor.model.js";


export const Disponibilidad = database.define('disponibilidad', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },

    id_tutor: {
        type: DataTypes.INTEGER,
        references: {
            model: Tutor,
            key: 'id'
        }
    },

    dia: {
        type: DataTypes.ENUM(['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'])
    },
    horaInicio: {
        type: DataTypes.TIME
    },
    horaFin: {
        type: DataTypes.TIME
    },
    
    estado: {
        type: DataTypes.ENUM(['Disponible', 'No Disponible'])
    }
})


