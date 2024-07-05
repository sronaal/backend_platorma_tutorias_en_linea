import { Disponibilidad } from '../models/disponibilidad.model.js'
import { Tutor } from '../models/tutor.model.js'

export class DaoDisponibilidad {



    agregarDisponibilidad(disponilidad) {

        return new Promise(async (resolve, reject) => {
            let id_disponibilidad
            console.log(disponilidad)
            Disponibilidad.create(disponilidad)

                .then(async (disponilidadCreate) => {

                    id_disponibilidad = disponilidadCreate.dataValues.id
                    console.log(disponilidadCreate.dataValues)

                    return Tutor.findOne({ where: { id_usuario: disponilidad.id_tutor} })



                })
                .then((tutor) =>{

                    return tutor.update({id_disponibilidad: id_disponibilidad })
                })
                .then((data) =>{

                    return resolve(data)
                })
                .catch(error => {
                    console.log(error)
                    return reject(error)
                })
        })


    }

    actualizarDisponibilidad(disponilidad) { }
}