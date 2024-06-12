import { Usuario } from "../models/usuario.models";


export class DaoUsuario {


    crearUsuario(usuario) {

        return Usuario.create(usuario)
    }

    async FindByUser(usuario) {

        let usuario = await  Usuario.findOne({ where: {email:usuario.email} })
        
        if(!usuario) return null

        return usuario
    }
    


}