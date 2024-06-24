import app from './app.js'
import config from './config/configuraciones.js'

const PORT = config.port || 8081
app.listen(PORT, (err) => {

    if(err) console.error(`Error servidor HTTP ${err}`)
    console.log(`SERVIDOR INICIADO EN PUERTO ${PORT}`)
}) 

