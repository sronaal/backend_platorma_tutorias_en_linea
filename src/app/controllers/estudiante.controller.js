import { request, response } from 'express'
import { DaoEstudiante } from '../dao/estudiante.dao.js'
import { DaoTutor } from '../dao/tutor.dao.js'

let daoEstudiante = new DaoEstudiante()
let daoTutor = new DaoTutor()

export const obtenerPerfilEstudiante = async (req = request, res = response) => {

    try {


        let id_usuario = req.params.id
        console.log(id_usuario)
        let estudiante = await daoEstudiante.obtenerDatosEstudiante(id_usuario)

        res.status(200).json({ estudiante })

    } catch (error) {

        return res.status(400).json({ error })
    }
}

export const filtrarTuroresSegunFiltro = async (req = request, res = response) => {


    try {

        let { materia, niveleducativo, ciudad } = req.query

        let filtros = {}


        if (materia != undefined) filtros = { ...filtros, "materia": materia }


        if (niveleducativo != undefined) filtros = { ...filtros, "nivelEducativo": niveleducativo }


        if (ciudad != undefined) filtros = { ...filtros, "ciudad": ciudad }


        let tutores = await daoTutor.obtenerTutoresFiltrados(filtros)

        return res.status(200).json({ tutores })

    } catch (error) {
        
        console.log(error)
        return res.status(400).json({ error })
    }
}