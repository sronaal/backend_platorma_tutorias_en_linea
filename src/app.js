const express = require("express") // framework http para la creacion de controladores
const cors = require("cors") // libreria para configurar el acceso al backend desde origines externos

const {configuraciones_server} = require("./config/configuraciones")
const rutasUsuarios = require("./app/routes/usuarios.routes")

const app = express()


// RUTAS DE LA APLICACIONES

app.use(`${configuraciones_server.ruta}/${rutasUsuarios}`)


app.use(cors({
    origin:'*'
}))

module.exports = app