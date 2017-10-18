'use strict'
const mysql = require('mysql');

var connectionData = {
   host        : process.env.DB_HOST, 
   port        : process.env.DB_PORT,
   user        : process.env.DB_USER,
   password    : process.env.DB_PASS,
   database    : process.env.DB_NAME
}

var executeQuery = function(query, parameters, cb){
   var dbConection = mysql.createConnection(connectionData);

   dbConection.connect();
   dbConection.query(query, parameters, cb);
   dbConection.end();
}

var funciones = {
   'connectionData'  : connectionData,
   'executeQuery'    : executeQuery,
};

module.exports = funciones;