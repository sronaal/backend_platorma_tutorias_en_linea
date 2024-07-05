import { Router } from "express";
import { obtenerTutoresDisponibles, agregarDisponibilidad, obtenerTutorId } from '../controllers/tutores.controller.js'
import { verificarToken } from '../helpers/jwt.js'

const routes =  Router()

routes.get('/:id', verificarToken, obtenerTutorId)
routes.get('/', verificarToken, obtenerTutoresDisponibles)

routes.get('/:id/disponibilidad/add', verificarToken, agregarDisponibilidad)


export default routes