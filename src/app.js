import express from 'express' // framework http para la creacion de controladores
import cors from 'cors'
 // libreria para configurar el acceso al backend desde origines externos

import config from './config/configuraciones.js'

import rutasUsuarios from "./app/routes/usuarios.routes.js"
import database from './database_conexion.js'
import { initModel } from './app/models/init_models.js'
const app = express()


// RUTAS DE LA APLICACIONES



app.use(cors({
    origin: '*'
}))


// Conexion base de datos
database.authenticate()
.then(() => {

    console.log("CONEXION DB EXITOSA")
    initModel()
    return database.sync({ force:true})
   
})
.then(() => {

    console.log("SINCRONIZACION DB EXITOSA ")
})
.catch((error) => {

    console.error("Error  DB ", error)
})


export default app