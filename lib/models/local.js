'use strict'
const mysql = require('../utils/mysqlutils');

var Local = function(){

};

Local.LocalSelectxIdEmpresa = function(cb) {
   mysql.executeQuery('call _LocalSelectxIdEmpresa()', [], function(err, result) {
      if(err) {
         return cb(err);
      }

      return cb(null, result[0]);
   });
}

Local.SelectCategoriaxIdEmpresa = function(cb) {
   mysql.executeQuery('call _SelectCategoriaxIdEmpresa()', [], function(err, result) {
      if(err) {
         return cb(err);
      }

      return cb(null, result[0]);
   });
}

module.exports = Local;