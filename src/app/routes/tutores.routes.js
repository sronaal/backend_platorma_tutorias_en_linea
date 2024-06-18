import { Router } from "express";
import { obtenerTutoresDisponibles, filtradoTurores } from '../controllers/tutores.controller.js'

const routes =  Router()


routes.get('/', obtenerTutoresDisponibles)

routes.get('/filter', filtradoTurores )


export default routes