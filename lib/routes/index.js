'use strict'
var router = require('express').Router();

const Usuario = require('../models/usuario');

router.post('/login', function(req, res, next){
   let correo = req.body.correo;
   let clave  = req.body.clave;

   Usuario.usuarioLogin(correo, clave, function(err, result){
      if(err){
         console.error(err);
         return next(null);
      }

      if(result[0]){
         req.session.correo      = correo;
         req.session.clave       = result[0].clave;
         req.session.id_usuario  = result[0].id_usuario;
         req.session.save();
         res.send(result);
      }
      else{
         res.send(null);
      }

      return next();
   });
});

router.post('/logincheck', (req, res, next) => {
   var correo = req.session.correo;
   var clave  = req.session.clave;

   if(!correo || !clave){
      res.send(false);
   }
   else{
      res.send(true);
   }   
   return next();
});

router.post('/logout', (req, res, next) => {
   req.session.destroy();
   res.end();
   return next();
})

module.exports = router;