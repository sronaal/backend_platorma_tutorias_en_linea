import { Router } from 'express'

import { obtenerTutorias, agendarTutoria } from  '../controllers/tutorias.controller.js'

let router = Router()

router.get('/', obtenerTutorias)
router.post('/add', agendarTutoria)

export default router