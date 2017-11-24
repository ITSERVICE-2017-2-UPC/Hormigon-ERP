'use strict'
const mysql = require('../utils/mysqlutils');

var Categoria = function(){

};

Categoria.SelectCategoriaxIdEmpresa = function(cb) {
   mysql.executeQuery('call _SelectCategoriaxIdEmpresa()', [], function(err, result) {
      if(err) {
         return cb(err);
      }

      return cb(null, result[0]);
   });
}

Categoria.CategoriaSelectxNombre = function(nombre, cb) {
   if(!nombre) {
      return cb(null, null);
   } 
   mysql.executeQuery('call _CategoriaSelectxNombre(?)', [nombre], function(err, result) {
      if(err) {
         return cb(err);
      }

      return cb(null, result[0]);
   });
}

Categoria.CategoriaInsert = function(nombre, descripcion, cb) {
   if(!nombre || !descripcion) {
      return cb(null, null);
   }
   mysql.executeQuery('call _CategoriaInsert(?,?)', [nombre, descripcion], function(err, result) {
      if(err) {
         return cb(err);
      }

      return cb(null, result[0]);
   });   
}

module.exports = Categoria;