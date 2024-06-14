import { Materia } from "../models/materia.model.js";
import { TutorMateria } from '../models/tutor.materia.model.js'
import { Tutor } from "../models/tutor.model.js";


export class DaoMateria {



    crearMateria(materia) {

        return Materia.create(materia)
    }


    obtenerMaterias() {

        return Materia.findAll({
            include: {
                model: Tutor,
                through: { attributes: [] }
            }
        })
    }




}