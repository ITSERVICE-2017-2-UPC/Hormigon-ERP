import Vue from 'vue'
import Router from 'vue-router'
import MasterPage from '@/pages/MasterPage'
import Login from '@/pages/Login'
import Configuracion from '@/pages/Configuracion'
import Ventas from '@/pages/Ventas'

Vue.use(Router)

export default new Router({
   routes: [
         {
            path: '/',
            component: MasterPage,
            children: [
               {
                  path: '/config',
                  component: Configuracion 
               },
               {
                  path: '/ventas',
                  component: Ventas
               }
            ]
         },
         {
            path: '/login',
            component: Login,
         }
      ],
   mode: 'history'
});
