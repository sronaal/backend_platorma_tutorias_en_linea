import { request, response } from 'express'
import { DaoUsuario } from '../dao/usuario.dao.js'
import { validarContraseñaHash, generarHashPassword } from '../helpers/bcrypt.js'
import { crearToken } from '../helpers/jwt.js'

let usuarioDao = new DaoUsuario()

export const IniciarSesion = async (req = request, res = response) => {


    try {

        let { email, password } = req.body


        let usuario = await usuarioDao.buscarPorEmail(email)

        if (!usuario) return res.status(401).json({ "mensaje": "Credenciales Invalidas" })


        if (!validarContraseñaHash(usuario.dataValues.password, password)) return res.status(401).json({ "mensaje": "Credenciales Invalidas" })


        let rol = await usuarioDao.consultarRol(usuario.dataValues.id)

        let dataToken = {
            "id_usuario": usuario.dataValues.id,
            "email": usuario.dataValues.email,
            "rol": rol
        }

        let jwt = crearToken(dataToken)

        return res.status(200).json({ "token": jwt })



    } catch (error) {

        return res.status(400).json({ "error": error })
    }

}




export const registarEstudiante = async (req = request, res = response) => {

    try {

        let { nombre, apellido, email, password, rol, fecha_nacimiento, datos_geograficos, telefono, discapacidad, descripcion_discapacidad, preferencias, descripcion_personal } = req.body


        let usuario = {
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "password": await generarHashPassword(password),
            "id_rol": rol,
            "fecha_nacimiento": fecha_nacimiento,
            //"direccion": datos_geograficos,
            "telefono": telefono,
            "discapacidad": discapacidad,
            "descripcion_discapacidad": descripcion_discapacidad,
            "preferencias": preferencias,
            "descripcion_personal": descripcion_personal,
        }

        console.log(usuario)

        let validarExistenciaEmail = await usuarioDao.buscarPorEmail(email)

        if (validarExistenciaEmail) return res.status(401).json({ "Mensaje": "Correo electronico en uso" })

        let result = await usuarioDao.registrarUsuario(usuario)

        if (!result) return res.status(400).json({ "Error": "Error al registrar el usuario" })

        return res.status(201).json({ "Mensaje": "Usuario creado correctamente" })


    } catch (error) {
        return res.status(400).json({ "Error": error })
    }
}

export const registrarTutor = async (req = request, res = response) => {

    try {

        let { nombre, apellido, email, password, id_rol } = req.body

        let usuario = {
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "password": await generarHashPassword(password),
            "id_rol": id_rol
        }


        let validarExistenciaEmail = await usuarioDao.buscarPorEmail(email)

        if (validarExistenciaEmail) return res.status(401).json({ "Mensaje": "Correo electronico en uso" })

        let result = await usuarioDao.registrarUsuario(usuario)

        if (!result) return res.status(400).json({ "Error": "Error al registrar el usuario" })

        return res.status(201).json({ "Mensaje": "Usuario creado correctamente" })

    } catch (error) {

        return res.status(400).json({ "Error": error })

    }

}

