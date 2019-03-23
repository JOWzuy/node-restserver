require('./config/config');
const express = require('express')
const mongoose = require('mongoose');


const app = express()
const bodyParser = require('body-parser')

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    //funciones que se van a disparar cada vez que pase por aqui el codigo

app.use(require('./routes/usuario'))





app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', 3000);

})

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Base de datos ONLINE');

    }


});