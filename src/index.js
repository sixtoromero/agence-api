const express = require('express');
const app = express();

//Configuración del servidor
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/desempenho'));

//Inicando Servidor
app.listen(app.get('port'), () => {
    console.log('Server en puerto', app.get('port'));
});