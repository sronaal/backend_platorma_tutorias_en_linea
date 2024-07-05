import { request, response } from 'express'
import { DaoTutor } from '../dao/tutor.dao.js'
import { DaoDisponibilidad } from '../dao/disponibilidad.dao.js'
import { DaoUsuario } from '../dao/usuario.dao.js'

let tutorDao = new DaoTutor()
let usuarioDao = new DaoUsuario()
let disponibilidadDao = new DaoDisponibilidad()

export const obtenerTutoresDisponibles = async (req = request, res = response) => {

    try {

        let tutores = await tutorDao.obtenerTutoresDisponibles()

        return res.status(200).json({ tutores })
    } catch (error) {

        return res.status(400).json({ error })
    }

}


export const obtenerTutorId = async (req = request, res  = response) => {

    try {
        
        let id = req.params.id

        let tutor = await tutorDao.buscarTutorId(id)

        return res.status(200).json({ tutor })
    } catch (error) {
        
        return res.status(400).json({ error })
    }
}


export const agregarDisponibilidad = async (req = request, res = response) => {

    try {

        let id = req.params.id
        console.log(id)

        let { dia, horaInicio, horaFin, estado } = req.body

        let consultarIdTutor = await usuarioDao.buscarPorId(id)

        if (!consultarIdTutor) return res.status(404).json({ "Mensaje": "Id tutor invalido" })


        let disponibilidad = {

            "id_tutor": id,
            "dia": dia,
            "horaFin": horaFin,
            "horaInicio": horaInicio,
            "estado": estado
        }
        
        await disponibilidadDao.agregarDisponibilidad(disponibilidad)
        return res.status(201).json({ "Mensaje" : "Disponibilidad Guardada"  })

    } catch (error) {

        return res.status(400).json({ error: error })
    }
}

