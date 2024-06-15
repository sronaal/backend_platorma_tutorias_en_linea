import bcrypt, { hash } from 'bcrypt'



export const  validarContraseñaHash =  (hashPassword, password) => {

    let result =  bcrypt.compareSync(password,hashPassword)

    return result
}

export const generarHashPassword = async (password) => {

    let hash = await bcrypt.hash(password,10)

    return hash
}