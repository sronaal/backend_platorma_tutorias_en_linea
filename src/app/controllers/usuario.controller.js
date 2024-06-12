import { request, response } from 'express'
import { DaoUsuario } from '../dao/usuario.dao'

let usuarioDao = new DaoUsuario()

export const IniciarSesion = (req = request, res = response) => {

    try {

        let { email, password } = req.body

        let usuario = usuarioDao.findByEmail(email)

        if (!usuario) return res.status(401).json({ "mensaje": "Credenciales Invalidas" })

            
    } catch (error) {

        return res.status(400).json({"error":error})
    }

}