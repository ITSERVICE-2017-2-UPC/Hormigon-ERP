'use strict'
var router = require('express').Router();

const Usuario = require('../models/usuario');

router.post('/update/personal/:id', (req, res, next) => {
   //Debe de actualizar la información personal de un usuario
   let id_usuario = req.params.id;
   let nombres = req.body.nombres || null;
   let apellidos = req.body.apellidos || null;

   Usuario.UsuarioActualizarInfoPersonal(id_usuario, nombres, apellidos, function(err, result) {
      if(err) {
         res.send(null);
         next(err);
      }

      res.send('ok');
      return next();
   });
});

module.exports = router;