import { Router } from "express";
import { obtenerTutoresDisponibles, filtradoTurores, agregarDisponibilidad } from '../controllers/tutores.controller.js'

const routes =  Router()


routes.get('/', obtenerTutoresDisponibles)

routes.get('/filter', filtradoTurores )
routes.get('/disponibilidad/add', agregarDisponibilidad)

export default routes