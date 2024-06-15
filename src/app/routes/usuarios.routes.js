import { Router } from "express"

// controladores usuario 
import { IniciarSesion, registarEstudiante, registrarTutor } from '../controllers/usuario.controller.js'

// validaciones formulario

import { validacionFormularioUsuarioLogin, validaciones } from '../middlewares/validators/valicaciones.form.usuario.js'

const router = Router()

router.post('/auth',validacionFormularioUsuarioLogin, validaciones, IniciarSesion)
router.post('/register/estudiante', validacionFormularioUsuarioLogin, validaciones, registarEstudiante )
router.post('/register/tutor', validacionFormularioUsuarioLogin, validaciones, registrarTutor )


export default router   