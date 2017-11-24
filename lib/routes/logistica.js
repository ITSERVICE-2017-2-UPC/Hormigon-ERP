'use strict'
var router = require('express').Router();
var async  = require('async');
const Local = require('../models/local');

router.post('/compras', (req, res, next) => {
   async.parallel({
      locales    : async.apply(Local.LocalSelectxIdEmpresa),
      categorias : async.apply(Local.SelectCategoriaxIdEmpresa)
   }, function(err, result) {
      if(err) {
         return next(err);
      }
      res.send(result);
      return next();
   });
});

module.exports = router;