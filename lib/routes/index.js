'use strict'
var router = require('express').Router();

const Usuario = require('../models/usuario');

router.post('/login', function(req, res, next){
   let username = req.body.username;
   let password = req.body.password;

   Usuario.usuarioLogin(username, password, function(err, result){
      if(err){
         console.error(err);
         return next(null);
      }

      if(result){
         req.session.username   = username;
         req.session.password   = result.password;
         req.session.id_usuario = result.id_usuario;
         req.session.save();
         res.send(result);
      }
      else{
         res.send(null);
      }

      return next();
   });
});

module.exports = router;