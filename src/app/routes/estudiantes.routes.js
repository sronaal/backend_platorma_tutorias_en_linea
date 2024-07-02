import { Router } from 'express'
import { obtenerPerfilEstudiante, filtrarTuroresSegunFiltro } from '../controllers/estudiante.controller.js'
import { verificarToken } from '../helpers/jwt.js'


let routes = Router()


routes.get('/:id', verificarToken, obtenerPerfilEstudiante)

routes.get('/tutores/filter', filtrarTuroresSegunFiltro)




export default routes