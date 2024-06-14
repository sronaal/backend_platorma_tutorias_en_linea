import { DataTypes } from "sequelize";

import database from "../../database_conexion.js";

export const Materia = database.define('materias',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:true
    },
    
    duracion:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    unidadDuracion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type: DataTypes.STRING
    }
    
})