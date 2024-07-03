import { Op } from 'sequelize'
import { Tutor } from "../models/tutor.model.js";
import { Usuario } from "../models/usuario.models.js";
import { Materia } from '../models/materia.model.js'

import { Ubicacion } from "../models/ubicacion.model.js";

export class DaoTutor {



    asignarRolTutor(id_usuario) {

        return Tutor.create({ id_usuario: id_usuario })
    }


    obtenerTutoresFiltrados(filtros) {


        let queryOptions = {

            include: [

                {
                    model: Usuario,
                    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
                },
                {
                    model: Materia,
                  
                    
                },
                
            ],
           
        }

        if(filtros.materia != undefined) queryOptions.include[1].where = { nombre:  filtros.materia }


        //if(filtros.niveleducativo != undefined) queryOptions.include[1].where = { nivelEducativo: filtros.niveleducativo}

        if(filtros.ciudad != undefined) queryOptions.where  = { ubicacion: filtros.ciudad }
        return Tutor.findAll(queryOptions)


    }


    obtenerTutores() {

        return Tutor.findAll({

            include: [
                {
                    model: [
                        {
                            Usuario
                        }
                    ]
                }
            ]
        })

    }

    obtenerTutorias() {


    }


    inscribirMateria(Materia) { }

    eliminarInscripcionMaterial() { }

    actualizarDisponibilidad() { }


    verReservas() { }

    calificarEstudiante() { }
}