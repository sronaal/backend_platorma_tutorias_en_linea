import { Sequelize } from "sequelize"
const database = new Sequelize('tutorias','tutorias','desarrollo.0021',{

    host:'localhost',
    dialect:'mysql',
    
    
})

export default  database