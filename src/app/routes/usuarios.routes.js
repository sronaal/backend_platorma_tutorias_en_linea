import { Router } from "express"

// controladores usuario 
import { IniciarSesion, registrarUsuario } from '../controllers/usuario.controller.js'

// validaciones formulario

import { validacionFormularioUsuarioLogin, validaciones } from '../middlewares/validators/valicaciones.form.usuario.js'

const router = Router()

router.post('/auth',validacionFormularioUsuarioLogin, validaciones, IniciarSesion)
router.post('/register', validacionFormularioUsuarioLogin, validaciones, registrarUsuario )


export default router   