import { Usuario } from "../models/usuario.models.js";
import { DaoEstudiante } from "./estudiante.dao.js";
import { DaoTutor } from "./tutor.dao.js";

let daoTutor = new DaoTutor()
let daoEstudiante = new DaoEstudiante()

export class DaoUsuario {




    registrarUsuario(usuario){

        return new Promise((resolve,reject) => {

            Usuario.create(usuario)
            .then((userData) => {

                let usuario_id = userData.dataValues.id

                if(usuario.rol == 'Maestro') return daoTutor.asignarRolTutor(usuario_id)
                
                if(usuario.rol == 'Estudiante') return daoEstudiante.asignarRolEstudiante(usuario_id)
            })
            .then(() => {

                return resolve(true)
            })
            .catch((error) => {
                console.log(error)
                return reject(error)
            })

        })
    }

    async buscarPorEmail(email) {

        let usuario = await  Usuario.findOne({ where: {email:email} })
       
        
        if(!usuario) return null

        return usuario
    }


    actualizarUsuario(){
        
    }
    


}