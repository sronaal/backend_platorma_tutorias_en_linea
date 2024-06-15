import { DataTypes } from "sequelize";
import database from '../../database_conexion.js'
import { Rol } from "./rol.model.js";
import { Ubicacion } from './ubicacion.model.js'

export const Usuario = database.define('Usuario', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: null
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: null,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: null
    },
    email: {
        type: DataTypes.STRING,
        allowNull: null
    },

    telefono:{

        type:DataTypes.INTEGER,
        allowNull: null
    },
    edad:{
        type:DataTypes.INTEGER,
        allowNull: null
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: null
    },


    ubicacion:{
        type: DataTypes.INTEGER,
        references:{
            model: Ubicacion,
            key:'id'
        }
    },

    id_rol:{
        type: DataTypes.INTEGER,
        references:{
            model: Rol,
            key:'id'
        }
    }

})