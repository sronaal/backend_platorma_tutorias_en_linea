import { Router } from "express";
import { obtenerTutoresDisponibles } from '../controllers/tutores.controller.js'

const routes =  Router()


routes.get('/', obtenerTutoresDisponibles)

export default routes