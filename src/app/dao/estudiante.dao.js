import { Estudiante } from '../models/estudiantes.model.js'

export class DaoEstudiante {



    asignarRolEstudiante(id_usuario){

        return Estudiante.create({id_usuario:id_usuario})
    }
}