'use strict'
var router = require('express').Router();

const Perfil = require('../models/perfil');

router.post('/admin/perfil', (req, res, next) => {
   //revisar si el perfil de la persona es aministrador
   //listar todos los perfiles y dar respuesta con res.send
   return next();
});

router.post('/admin/perfil/nuevo', (req, res, next) => {
   //debe de crear un nuevo perfile en la base de datos
   return next();
});