import { Router } from "express"

import { IniciarSesion } from '../controllers/usuario.controller.js'


const router = Router()

router.post('/user/auth', IniciarSesion)



export default router