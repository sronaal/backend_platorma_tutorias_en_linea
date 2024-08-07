import { Estudiante } from '../models/estudiantes.model.js'
import { Usuario } from '../models/usuario.models.js'
import { Tutor  } from '../models/tutor.model.js'
export class DaoEstudiante {



    agregarDatosEstudiante(estudiante) {

        return Estudiante.create(estudiante)
    }


    obtenerDatosEstudiante(id_usuario) {

        return Usuario.findOne({ where: { id: id_usuario }, 
            
            attributes:['id','nombre','apellido','genero','fecha_nacimiento','email','telefono','ubicacion'],
            include: [
                {
                    model:Estudiante
                }
            ],
            
        })
    }

    

}