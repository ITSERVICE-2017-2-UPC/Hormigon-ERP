'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Perfiles from '@/pages/config/admin/Perfiles'
import MasterPage from '@/pages/MasterPage'
import NuevoPerfil from '@/pages/config/admin/NuevoPerfil'
import Configuracion from '@/pages/Configuracion'
import ConfigUsuario from '@/pages/ConfigUsuario'
import GestionUsuario from '@/pages/config/admin/GestionUsuario'
import ConfigProveedor from '@/pages/ConfigProveedor'

Vue.use(Router)

export default new Router({
   mode: 'history',
   transitionOnLoad: true,
   routes: [
      {
         path: '/',
         component: MasterPage,
         children: [
            {
               path: 'config/usuario',
               component: ConfigUsuario
            },
            {
               path: 'config/proveedor',
               component: ConfigProveedor
            },
            {
               path: 'config/admin/usuario',
               component: GestionUsuario
            },
            {
               path: 'config/admin/perfil',
               component: Perfiles
            },
            {
               path: 'config/admin/perfil/nuevo',
               component: NuevoPerfil
            }
         ]
      },
      {
         path: '/login',
         component: Login,
      }
   ]
});
