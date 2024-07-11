import { Estudiante } from "../models/estudiantes.model.js";
import { Tutor } from "../models/tutor.model.js";
import { Tutoria } from "../models/tutoria.mode.js";
import { Usuario } from "../models/usuario.models.js";

export class TutoriaDao {


    crearTutoria(tutoria) {


        return Tutoria.create(tutoria)

    }


    obtenerTutorias() {

        let tutorias = []
        return new Promise(async (resolve, reject) => {

            try {
                let tutoria = await Tutoria.findAll()

            
            tutoria.forEach(async tutoria => {

                let dataTutoria = {

                    "fecha": tutoria.dataValues.fecha,
                    "horaInicio": tutoria.dataValues.horaInicio,
                    "horaFin": tutoria.dataValues.horaFin,
                    "estado": tutoria.dataValues.estado,
                    "calificacion": tutoria.dataValues.calificacion
                }

                let estudiante = await Estudiante.findOne({ 
                    where: { id: tutoria.dataValues.id_estudiante }, 
                    
                    include:[{

                        model:Usuario,
                        attributes: { exclude: ["password", "createdAt", "updateAt"] }
                    }]
                })
                
                dataTutoria.estudiante = estudiante.dataValues

                let tutor = await Tutor.findOne({ 
                    where: { id: tutoria.dataValues.id_tutor }, 
                    
                    include: [{

                        model: Usuario,
                        attributes: { exclude: ["password", "createdAt", "updateAt"] }
                    }]
                })
                
                dataTutoria.tutor = tutor.dataValues

                //console.log(dataTutoria)
                tutorias.push(dataTutoria)
               return resolve(tutorias)
            })
            } catch (error) {
                return reject(error)
            }

            

        })








        return Tutoria.findAll({

            include: [

                {
                    model: Estudiante
                },
                {
                    model: Tutor
                }
            ]
        })
    }
}
