import jwt from 'jsonwebtoken'
import config from '../../config/configuraciones.js'

const secret_key = config.configuraciones_server.secret_key_dev

export const crearToken = (usuarioData) => {


    let token = jwt.sign(usuarioData,secret_key)

    return token
}


