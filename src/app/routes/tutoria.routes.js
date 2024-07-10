import { Router } from 'express'

import { obtenerTutorias } from  '../controllers/tutorias.controller.js'

let router = Router()

router.get('/', obtenerTutorias)


export default router