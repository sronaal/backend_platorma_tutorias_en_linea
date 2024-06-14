import express from 'express' // framework http para la creacion de controladores
import cors from 'cors'
// libreria para configurar el acceso al backend desde origines externos

import config from './config/configuraciones.js'


// IMPORTACION DE RUTAS
import rutasUsuarios from "./app/routes/usuarios.routes.js"
import rutasMateria from './app/routes/materia.routes.js'


import database from './database_conexion.js'

import { initModel } from './app/models/init_models.js'
const app = express()


// Conexion base de datos
const conectarDB = () => {

    database.authenticate()
        .then(() => {

            console.log("CONEXION DB EXITOSA")
            initModel()
            return database.sync({ force: false })

        })
        .then(() => {

            console.log("SINCRONIZACION DB EXITOSA ")
        })
        .catch((error) => {

            console.error("Error  DB ", error)
        })
}
conectarDB()

// Configuracion basica de servidor 
app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// RUTAS DE LA APLICACIONES
app.use('/api/v1/user', rutasUsuarios)
app.use('/api/v1/materia', rutasMateria)







export default app