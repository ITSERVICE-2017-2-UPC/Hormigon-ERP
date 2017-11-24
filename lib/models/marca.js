'use strict'
const mysql = require('../utils/mysqlutils');

var Marca = function(){

};

Marca.MarcaSelectxNombre = function(nombre, cb) {
   if(!nombre) {
      return cb(null, null);
   }
   mysql.executeQuery('call _MarcaSelectxNombre(?)', [nombre], function(err, result) {
      if(err) {
         return cb(err);
      }
      return cb(null, result[0]);
   });
}

Marca.MarcaInsert = function(nombre, cb) {
   if(!nombre) {
      return cb(null, null);
   }
   mysql.executeQuery('call _MarcaInsert(?)', [nombre], function(err) {
      if(err) {
         return cb(err);
      }
      return cb(null, 'ok');
   });
}

module.exports = Marca;