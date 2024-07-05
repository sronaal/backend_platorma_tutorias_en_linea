import { DataTypes } from "sequelize";
import database from '../../database_conexion.js'


export const Disponibilidad = database.define('disponibilidad', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

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


