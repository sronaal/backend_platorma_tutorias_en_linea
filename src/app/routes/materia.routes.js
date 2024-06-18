import { Router } from "express";

import { agregarMateria,obtenerMaterias} from '../controllers/materia.controller.js'

const router = Router()


router.post('/add', agregarMateria)
router.get('/tutores', obtenerMaterias)

export default router