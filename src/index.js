import app from './app.js'


const PORT = process.env.PORT || 3500

app.listen(PORT, (err) => {

    if(err) console.error(`Error servidor HTTP ${err}`)
    console.log(`SERVIDOR INICIADO EN PUERTO ${PORT}`)
}) 

