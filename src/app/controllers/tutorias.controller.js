
import { request, response } from 'express'
import { TutoriaDao } from '../dao/tutoria.dao.js'
import { DaoEstudiante } from '../dao/estudiante.dao.js'
import { DaoTutor } from '../dao/tutor.dao.js'

let daoTutoria = new TutoriaDao()
let daoEstudiante = new DaoEstudiante()
let daoTutor = new DaoTutor()

export const obtenerTutorias = async (req = request, res = response) => {


    try {
        let tutorias = await daoTutoria.obtenerTutorias()

        return res.status(200).json({ tutorias })

    } catch (error) {

        console.log(error)
        return res.status(400).json({ error })
    }
}

export const agendarTutoria = async (req = request, res = response) => {

    try {

        let { id_estudiante, id_tutor, fecha, horaInicio, horaFin, estado } = req.body

        let validarExistenciaEstudianteId = await daoEstudiante.obtenerDatosEstudiante(id_estudiante)

        if (!validarExistenciaEstudianteId) return res.status(404).json({ "mensaje": "Estudiante no encontrado" })

        let validarExistenciaTutorId = await daoTutor.buscarTutorId(id_tutor)

        if (!validarExistenciaTutorId) return res.status(404).json({ "mensaje": "Tutor no encontrado" })

        let tutoria = {

            "id_estudiante": validarExistenciaEstudianteId.dataValues.id,
            "id_tutor": validarExistenciaTutorId.dataValues.id,
            "fecha": fecha,
            "horaInicio": horaInicio,
            "horaFin": horaFin,
            "estado": estado
        }

        let tutoriaCreate = await daoTutoria.crearTutoria(tutoria)

        return res.status(201).json({ "mensaje": "Tutoria creada" })


    } catch (error) {

    }
}