/* 
====================================
PUERTO
==================================== */


process.env.PORT = process.env.PORT || 3000;

/* Entorno */
process.env.Node_ENV = process.env.NODE_Env || 'dev';

/* Base de datos */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://strider:<4570ampcwc!>@cluster0-kslew.mongodb.net/cafe'

}

process.env.URLDB = urlDB;