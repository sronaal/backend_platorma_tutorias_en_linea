import { request, response } from 'express'
import { DaoEstudiante } from '../dao/estudiante.dao.js'


let daoEstudiante = new DaoEstudiante()


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