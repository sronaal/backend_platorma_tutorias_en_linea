import { Administrador } from "./administrador.model.js";
import { Estudiante } from "./estudiantes.model.js";
import { Usuario } from "./usuario.models.js";


export const initModel = () => {

    Usuario.hasOne(Estudiante,{ foreignKey: 'id'})
    Usuario.hasOne(Administrador, { foreignKey: 'id' })

    Estudiante.belongsTo(Usuario, { foreignKey: 'id' })
    Administrador.belongsTo(Usuario, { foreignKey: 'id' })
}