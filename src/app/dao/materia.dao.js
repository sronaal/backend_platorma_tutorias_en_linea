import { Materia } from "../models/materia.model.js";
import { TutorMateria } from "../models/tutor.materia.model.js";
import { Tutor } from "../models/tutor.model.js";
import { Usuario } from "../models/usuario.models.js";

export class DaoMateria {
  crearMateria(materia) {
    return Materia.create(materia);
  }

  
  obtenerMateriasV2(){}

  async  obtenerMaterias() {
    let materiasDisponibles = [];

    try {
        const materias = await Materia.findAll({
            include: {
                model: Tutor,
                through: { attributes: [] }
            }
        });


        
        // Crear un array de promesas para todas las operaciones asincrónicas
        const promises = materias.map(async (materia) => {
            try {
                const id_tutor = materia.dataValues.tutors[0].id_usuario;
                const usuario = await Usuario.findOne({
                    where: { id: id_tutor },
                    attributes: { exclude: ["password", "createdAt", "updateAt"] }
                });

                const materiaData = {
                    "id_materia": materia.dataValues.id,
                    "nombre_materia": materia.dataValues.nombre,
                    "duracion": materia.dataValues.duracion,
                    "unidadDuracion": materia.dataValues.unidadDuracion,
                    "descripcion": materia.dataValues.descripcion,
                    "tutores": [
                        {
                            "id_tutor": usuario.dataValues.id,
                            "nombre": `${usuario.dataValues.nombre} ${usuario.dataValues.apellido}`,
                            "email": usuario.dataValues.email
                        }
                    ]
                };

                materiasDisponibles.push(materiaData);
            } catch (error) {
                console.error(`Error al procesar la materia ${materia.dataValues.id}:`, error);
            }
        });

        // Esperar a que todas las promesas se completen
        await Promise.all(promises);

        console.log(materiasDisponibles); // Mostrar el array final para depuración
        return materiasDisponibles;
    } catch (error) {
        console.error('Error al obtener las materias:', error);
        throw error;
    }
}

  

}
