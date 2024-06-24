import express from 'express' // framework http para la creacion de controladores
import cors from 'cors'


// IMPORTACION DE RUTAS
import rutasUsuarios from "./app/routes/usuarios.routes.js"
import rutasMateria from './app/routes/materia.routes.js'
import rutasTutor from './app/routes/tutores.routes.js'
import rutasEstudiante from './app/routes/estudiantes.routes.js'
import database from './database_conexion.js'

import { initModel } from './app/models/init_models.js'
import {  initData } from './config/initData.js'
const app = express()


// Conexion base de datos
const conectarDB = () => {

    database.authenticate()
        .then(() => {

            console.log("CONEXION DB EXITOSA")
            initModel()
            //initData()

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
//app.use('/api/doc',swaggerUI.serve, swaggerUI.setup(swaggerOptiosn))
app.use('/api/v1/user', rutasUsuarios)
app.use('/api/v1/materia', rutasMateria)
app.use('/api/v1/tutor', rutasTutor)
app.use('/api/v1/estudiante', rutasEstudiante)






export default app