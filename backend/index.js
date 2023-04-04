const express = require('express');
require('dotenv').config();

//Ver los procesos y sacar el PORT del .env
// console.log( process.env )

const app = express();



app.use( express.json() );

app.use('/api/auth', require('./routes/auth'))

app.use( express.static('public'));




app.listen( process.env.PORT, () => {
    console.log(`servidor en puerto ${process.env.PORT}`)
})
