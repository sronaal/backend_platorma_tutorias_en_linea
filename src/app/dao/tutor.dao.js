import { Tutor } from "../models/tutor.model.js";
import { Usuario } from "../models/usuario.models.js";

export class DaoTutor {



    asignarRolTutor(id_usuario){

        return Tutor.create({id_usuario:id_usuario})
    }


    obtenerEstudiantes(){

        
    }


    inscribirMateria(Materia){}

    eliminarInscripcionMaterial(){}

    actualizarDisponibilidad(){}
    

    verReservas(){}

    calificarEstudiante(){}
}