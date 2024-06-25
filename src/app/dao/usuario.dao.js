import { Tutor } from "../models/tutor.model.js";
import { Usuario } from "../models/usuario.models.js";
import { DaoEstudiante } from "./estudiante.dao.js";
import { DaoTutor } from "./tutor.dao.js";
let daoTutor = new DaoTutor()
let daoEstudiante = new DaoEstudiante()


export class DaoUsuario {




    registrarUsuario(usuario) {

        return new Promise((resolve, reject) => {

            Usuario.create(usuario)
                .then((userData) => {

                    let usuario_id = userData.dataValues.id

                    if (usuario.id_rol == 2) {
                        

                        


                        return daoTutor.asignarRolTutor(usuario_id)
                    }
                    if (usuario.id_rol == 3) {

                        let estudiante = {

                            "id_usuario":userData.dataValues.id,
                            "grado": usuario.grado,
                            "preferencias": usuario.preferencias,
                            "discapacidad": usuario.discapacidad
                        }


                        return daoEstudiante.agregarDatosEstudiante(estudiante)
                    }
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

    buscarPorEmail(email) {

        return Usuario.findOne({ where: { email: email } })

    }


    buscarPorId(id) {

        return Usuario.findOne({ where: { id: id }, attributes: { exclude: ['password'] } })
    }



    consultarRol(id_usuario) {

        return new Promise(async (resolve, reject) => {

            try {
                let user = await Usuario.findOne({ where: { id: id_usuario } })

                let id_rol = user.dataValues.id_rol

                switch (id_rol) {
                    case 1:
                        return resolve({"id":1, "rol":'Administrador'})

                    case 2:
                        return resolve({"id":2, "rol":'Estudiante'})

                    case 3:
                        return resolve({"id":3, "rol":'Tutor'})
                }

            } catch (error) {

                return reject(error)
            }

        })
    }

    actualizarUsuario() {

    }



}