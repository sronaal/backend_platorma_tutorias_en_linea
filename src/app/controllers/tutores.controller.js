import { request, response  } from 'express'
import { DaoTutor } from  '../dao/tutor.dao.js'

let tutorDao = new DaoTutor()

export const obtenerTutoresDisponibles = async (req = request, res = response) => {

    try {
        
        let tutores = await tutorDao.obtenerTutores()

        return res.status(200).json({ tutores })
    } catch (error) {
        
        return res.status(400).json({ error })
    }    

}


export const filtradoTurores = async (req = request, res = response) => {

    try {
        
        const { query } = req
        
        console.log(query)
      
    } catch (error) {
        
    }
}