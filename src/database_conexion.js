import { Sequelize } from "sequelize"
import config from './config/configuraciones.js'

console.log(config)
const database = new Sequelize(config.database.database,config.database.user,config.database.password,{

    host: config.database.host,
    dialect:'mysql',
    logging:false
    
    
})

export default  database