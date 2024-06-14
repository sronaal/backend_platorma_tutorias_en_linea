import { request, response } from 'express'
import { DaoMateria } from '../dao/materia.dao.js'


let daoMateria = new DaoMateria()

export const agregarMateria = async (req = request, res = response) => {

    try {

        let { nombre, duracion, unidadDuracion, descripcion } = req.body

        let materia = {

            "nombre": nombre,
            "duracion": duracion,
            "unidadDuracion": unidadDuracion,
            "descripcion": descripcion
        }

        let result = await daoMateria.crearMateria(materia)

        if (!result) return res.status(400).json({ "Error": "Error al agregar la materia" })

        return res.status(201).json({ "Mensaje": "Materia Agregada" })

    } catch (error) {

        return res.status(400).json({ error })

    }
}


export const obtenerMaterias = async (req = request, res = response) => {


    try {

        let materias = await daoMateria.obtenerMaterias()

        if (materias.length < 1) return res.status(200).json({ "Mensaje": "Sin materias disponibles" })

        return res.status(200).json({ materias })

    } catch (error) {

        return res.status(400).json({ error })
    }
}