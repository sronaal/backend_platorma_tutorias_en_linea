import { Estudiante } from '../models/estudiantes.model.js'

export class DaoEstudiante {



    agregarDatosEstudiante(estudiante){

        return Estudiante.create(estudiante)
    }


}