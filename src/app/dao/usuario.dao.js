import { Usuario } from "../models/usuario.models";


export class DaoUsuario {


    crearUsuario(usuario) {

        return Usuario.create(usuario)
    }

    async findByEmail(email) {

        let usuario = await  Usuario.findOne({ where: {email:email} })
        
        if(!usuario) return null

        return usuario
    }
    


}