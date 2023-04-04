const express = require('express');
require('dotenv').config();

//Ver los procesos y sacar el PORT del .env
// console.log( process.env )

const app = express();

app.use( express.static('public'))


// app.get('/', (req, res) =>{
//     console.log(`se requiere /`)
//     res.json({ok:true})
// } );

app.listen( process.env.PORT, () => {
    console.log(`servidor en puerto ${process.env.PORT}`)
})
