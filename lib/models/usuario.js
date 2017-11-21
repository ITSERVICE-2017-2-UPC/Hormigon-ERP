'use strict'
const mysql = require('../utils/mysqlutils');

var Usuario = function(){

};

Usuario.usuarioLogin = function(correo, clave, cb){
   if(!correo || !clave){
      return cb();
   }

   mysql.executeQuery('call verificar_credenciales(?,?)', [correo, clave], function(err, result, fields){
      if(err){
         console.error(err);
         return cb(err);
      }

      if(result.length <= 0){
         return cb(null, null);
      }

      return cb(null, JSON.parse(JSON.stringify(result[0])));
   });
}

Usuario.UsuarioActualizarInfoPersonal = function(id, nombres, apellidos, cb) {
   if(!nombres || !apellidos) {
      return cb();
   }

   nombres = nombres.trim();
   apellidos = apellidos.trim();

   mysql.executeQuery('call _UsuarioActualizarInfoPersonal(?,?,?)', [id, nombres, apellidos], function(err, result) {
      if(err){
         console.error(err);
         return cb(err);
      }

      return cb();
   });
}

module.exports = Usuario;