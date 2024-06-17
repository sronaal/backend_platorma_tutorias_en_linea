import { Router } from 'express'
import { obtenerPerfilEstudiante, filtrarTuroresSegunFiltro } from '../controllers/estudiante.controller.js'


let routes = Router()


routes.get('/:id', obtenerPerfilEstudiante)

routes.get('/tutores/filter', filtrarTuroresSegunFiltro)




export default routes