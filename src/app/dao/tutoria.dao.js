import { Estudiante } from "../models/estudiantes.model.js";
import { Tutor } from "../models/tutor.model.js";
import { Tutoria } from "../models/tutoria.mode.js";

export class TutoriaDao {


    crearTutoria(tutoria){

        
        return Tutoria.create(tutoria)

    }


    obtenerTutorias(){
        
        return Tutoria.findAll({

            include:[

                {
                    model: Estudiante
                },
                {
                    model:Tutor
                }
            ]
        })
    }
}
