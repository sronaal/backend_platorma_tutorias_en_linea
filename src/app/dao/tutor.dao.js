import { Tutor } from "../models/tutor.model.js";
import { Usuario } from "../models/usuario.models.js";
import { Materia } from '../models/materia.model.js'

export class DaoTutor {



    asignarRolTutor(id_usuario){

        return Tutor.create({id_usuario:id_usuario})
    }


    obtenerTutores(){

        return Tutor.findAll({
        
            include: [
                {
                    model: Materia
                }
            ]
        })

    }

    obtenerTutorias(){

        
    }


    inscribirMateria(Materia){}

    eliminarInscripcionMaterial(){}

    actualizarDisponibilidad(){}
    

    verReservas(){}

    calificarEstudiante(){}
}