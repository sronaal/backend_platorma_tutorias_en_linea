import { Router } from  'express'
import { obtenerPerfilEstudiante } from '../controllers/estudiante.controller.js'


let routes = Router()


routes.get('/:id', obtenerPerfilEstudiante)

export default routes