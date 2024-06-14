import bcrypt, { hash } from 'bcrypt'



export const  validarContraseñaHash = async (hashPassword, password) => {

    let result =  bcrypt.compareSync(password,hashPassword)
}

export const generarHashPassword = async (password) => {

    let hash = await bcrypt.hash(password,10)

    return hash
}