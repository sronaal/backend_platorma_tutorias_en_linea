import { Tutor } from "../models/tutor.model.js";
import { Usuario } from "../models/usuario.models.js";
import { Materia } from '../models/materia.model.js'

export class DaoTutor {



    asignarRolTutor(id_usuario){

        return Tutor.create({id_usuario:id_usuario})
    }


    obtenerTutoresFiltrados(filtros){


        let queryOptions = {

            include: [
                {
                    model:Usuario,
                    include: ['nombre','apellido','email']
                },
                {
                    model:Materia,
                    through: { attributes: [] } 
                }
            ],
            where: {}
        }

        if(filtros.materia != undefined) queryOptions.include[1].where = { nombre: filtros.materia}

        return Tutor.findAll()

       
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