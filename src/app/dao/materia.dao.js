import { Materia } from "../models/materia.model.js";



export class DaoMateria{



    crearMateria(materia){

        return Materia.create(materia)
    }



    
}