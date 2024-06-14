import { request, response } from 'express'
import { DaoUsuario } from '../dao/usuario.dao.js'
import { validarContraseñaHash,generarHashPassword } from '../helpers/bcrypt.js'


let usuarioDao = new DaoUsuario()

export const IniciarSesion = async (req = request, res = response) => {


    try {

        let { email, password } = req.body

        console.log(req.body)
        let usuario = await usuarioDao.findByEmail(email)

        if (!usuario) return res.status(401).json({ "mensaje": "Credenciales Invalidas" })

        validarContraseñaHash(usuario.dataValues)



    } catch (error) {

        return res.status(400).json({ "error": error })
    }

}


export const registrarUsuario = async (req = request, res = response) => {

    try {
        
        let { nombre, apellido, email, password, rol } = req.body

        let usuario = {
            "nombre":nombre,
            "apellido":apellido,
            "email":email,
            "password" : await generarHashPassword(password),
            "rol": rol
        }


        let validarExistenciaEmail   = await  usuarioDao.buscarPorEmail(email)

        if(validarExistenciaEmail) return res.status(401).json({"Mensaje":"Correo electronico en uso"})

        let result = await usuarioDao.registrarUsuario(usuario)

        if(!result) return res.status(400).json({"Error":"Error al registrar el usuario"})

        return res.status(201).json({"Mensaje":"Usuario creado correctamente"})
        
    } catch (error) {

        return res.status(400).json({"Error": error})
      
    }

}