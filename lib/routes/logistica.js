'use strict'
var router = require('express').Router();
var async  = require('async');

const Local     = require('../models/local');
const Categoria = require('../models/categoria');

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

router.post('/categorias/buscar', function(req, res, cb) {
   let nombre = req.body.nombre;
   Categoria.CategoriaSelectxNombre(nombre, function(err, result) {
      if(err) {
         return cb(err);
      }
      res.send(result);
      return cb();
   });
});

router.post('/categorias/nuevo/insert', function(req, res, cb) {
   let nombre = req.body.nombre || null;
   let descripcion = req.body.descripcion || null;

   if(!nombre || !descripcion) {
      res.send(null);
      return cb();
   }

   Categoria.CategoriaInsert(nombre, descripcion, function(err, result) {
      if(err) {
         return cb(err);
      }
      res.send('ok');
      return cb();
   });
});

module.exports = router;