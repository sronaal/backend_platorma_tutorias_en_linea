import { request, response } from 'express'
import { DaoTutor } from '../dao/tutor.dao.js'
import { DaoDisponibilidad } from '../dao/disponibilidad.dao.js'


let tutorDao = new DaoTutor()
let disponibilidadDao = new DaoDisponibilidad()

export const obtenerTutoresDisponibles = async (req = request, res = response) => {

    try {

        let tutores = await tutorDao.obtenerTutores()

        return res.status(200).json({ tutores })
    } catch (error) {

        return res.status(400).json({ error })
    }

}


export const filtradoTurores = async (req = request, res = response) => {

    try {

        const { query } = req

        console.log(query)

    } catch (error) {

    }
}


export const agregarDisponibilidad = async (req = request, res = response) => {

    try {

        let { id_tutor, dia, horaInicio, horaFin, estado } = req.body

        let consultarIdTutor = await tutorDao.buscarTutorId(id_tutor)

        if (!consultarIdTutor) return res.status(404).json({ "Mensaje": "Id tutor invalido" })


        let disponibilidad = {

            "id_tutor": id_tutor,
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