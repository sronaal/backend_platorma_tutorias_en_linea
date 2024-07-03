import { Disponibilidad } from '../models/disponibilidad.model.js'

export class DaoDisponibilidad {



    agregarDisponibilidad(disponilidad){

        return Disponibilidad.create(disponilidad)
    }

    actualizarDisponibilidad(disponilidad){}
}