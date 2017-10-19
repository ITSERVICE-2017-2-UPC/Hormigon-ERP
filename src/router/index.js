import Vue from 'vue'
import Router from 'vue-router'
import MasterPage from '@/pages/MasterPage'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MasterPage
    },
    {
      path: '/login',
      component: Login 
    }
  ],
  mode: 'history'
})
