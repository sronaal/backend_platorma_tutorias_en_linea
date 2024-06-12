import express from 'express' // framework http para la creacion de controladores
import cors from 'cors'
 // libreria para configurar el acceso al backend desde origines externos

import config from './config/configuraciones.js'

import rutasUsuarios from "./app/routes/usuarios.routes.js"
import database from './database_conexion.js'
const app = express()


// RUTAS DE LA APLICACIONES



app.use(cors({
    origin: '*'
}))


const DbConexion = async () => {

    try {
        await database.authenticate()
        console.log("Co")
    } catch (error) {

    }
}


export default app