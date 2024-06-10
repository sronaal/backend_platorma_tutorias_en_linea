const express = require("express") // framework http para la creacion de controladores
const cors = require("cors") // libreria para configurar el acceso al backend desde origines externos

const app = express()


app.use(cors({
    origin:'*'
}))

module.exports = app