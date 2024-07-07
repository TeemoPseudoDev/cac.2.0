const express = require('express');

//Configuración del servidor:
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware de navegación:

app.get('/', (req, res) => { res.send('Probando.'); }); //Endpoint por defecto.

//Inicialización del servidor:
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto: ${PORT}`)
});