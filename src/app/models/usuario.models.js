import {  DataTypes } from "sequelize";
import database from '../../database_conexion.js'


export const Usuario = database.define('Usuario',{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:null
    },
    
    nombre:{
        type:DataTypes.STRING,
        allowNull:null,   
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:null
    },
    email:{
        type:DataTypes.STRING,
        allowNull:null
    },
    password:{
        type:DataTypes.STRING,
        allowNull:null
    }
})