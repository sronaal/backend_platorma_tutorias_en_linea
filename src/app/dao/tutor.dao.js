import { Tutor } from "../models/tutor.mode.js";
import { Usuario } from "../models/usuario.models.js";

export class DaoTutor {



    asignarRolTutor(id_usuario){

        return Tutor.create({id_usuario:id_usuario})
    }

    inscribirMateria(){}

    eliminarInscripcionMaterial(){}

    actualizarDisponibilidad(){}
    

    verReservas(){}

    calificarEstudiante(){}
}