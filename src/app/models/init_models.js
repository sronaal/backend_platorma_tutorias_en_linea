import { Administrador } from "./administrador.model.js";
import { Estudiante } from "./estudiantes.model.js";
import { Materia } from "./materia.model.js";
import { TutorMateria } from "./tutor.materia.model.js";
import { Tutor } from "./tutor.mode.js";
import { Usuario } from "./usuario.models.js";


export const initModel = () => {



    Usuario.hasOne(Estudiante,{ foreignKey: 'id_usuario'})
    Usuario.hasOne(Administrador, { foreignKey: 'id_usuario' })
    Usuario.hasOne(Tutor,{ foreignKey:'id_usuario'})
    
    Estudiante.belongsTo(Usuario, { foreignKey: 'id_usuario' })
    Administrador.belongsTo(Usuario, { foreignKey: 'id_usuario' })
    Tutor.belongsTo(Usuario, { foreignKey: 'id_usuario' })


    Tutor.belongsToMany(Materia, { through: TutorMateria, foreignKey :'tutorId' })
    Materia.belongsToMany(Tutor, { through: TutorMateria, foreignKey: 'materiadId'})



}