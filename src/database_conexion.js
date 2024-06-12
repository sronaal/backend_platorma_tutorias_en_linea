import { Sequelize } from "sequelize"
const database = new Sequelize('tutorias','tutorias','desarrollo',{

    host:'localhost',
    dialect:'mysql',
    
})

export default  database