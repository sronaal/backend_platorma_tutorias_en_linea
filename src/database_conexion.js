import { Sequelize } from "sequelize"

// el metodo Sequelize recibe 3 parametros: nombre de la base de datos, usuario y contraseña
const database = new Sequelize('tutorias','root','1234',{ 
    host:'localhost',
    dialect:'mysql',
})

export default  database