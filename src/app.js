import express from 'express' // framework http para la creacion de controladores
import cors from 'cors'
 // libreria para configurar el acceso al backend desde origines externos

import config from './config/configuraciones.js'

import rutasUsuarios from "./app/routes/usuarios.routes.js"
import rutasMateria from './app/routes/materia.routes.js'


import database from './database_conexion.js'

import { initModel } from './app/models/init_models.js'
const app = express()


// RUTAS DE LA APLICACIONES

database.authenticate()
.then(() => {

    console.log("CONEXION DB EXITOSA")
    initModel()
    return database.sync({ force:false})
   
})
.then(() => {

    console.log("SINCRONIZACION DB EXITOSA ")
})
.catch((error) => {

    console.error("Error  DB ", error)
})

app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/user', rutasUsuarios)
app.use('/api/v1/materia', rutasMateria)

// Conexion base de datos



export default app