import { Router } from "express";
import { verificarToken } from '../helpers/jwt.js'
import { agregarMateria, obtenerMaterias } from '../controllers/materia.controller.js'

const router = Router()


router.post('/add', verificarToken, agregarMateria)
router.get('/tutores', verificarToken, obtenerMaterias)



export default router