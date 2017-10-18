'use strict'
const mysql = require('../utils/mysqlutils');

var Usuario = function(){

};

Usuario.usuarioLogin = function(username, password, cb){
   if(!username || !password){
      return cb();
   }

   mysql.executeQuery('call usuarioLogin(?,?)', [username, password], function(err, result, fields){
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

module.exports = Usuario;