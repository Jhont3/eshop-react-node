const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConection } = require('./database/config');

//Ver los procesos y sacar el PORT del .env
// console.log( process.env )

//Create server
const app = express();

// BD
dbConection();

app.use( cors() );


app.use( express.json() );

app.use('/api/auth', require('./routes/auth'))
// app.use('/api/events', require('./routes/events'))

app.use('/api/user', require('./routes/user'))

app.use('/api/products', require('./routes/product'))


app.use( express.static('public'));



app.listen( process.env.MONGO_PORT, () => {
    console.log(`servidor en puerto ${process.env.MONGO_PORT}`)
})
