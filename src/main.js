// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
'use strict'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import MainCss from './styles/main-style.css'

Vue.use(VueResource);

Vue.config.productionTip = false

router.beforeEach(function(to, from, next){
   var xhtml = new XMLHttpRequest();
   
   xhtml.onreadystatechange = function() {
      if(xhtml.status == 200 && xhtml.readyState == 4){
         let response = xhtml.responseText;
         console.log(response)
         console.log(to.path);
         if(response == 'true'){
            if(to.path == '/login'){
               return next({path: '/'});
            }
            else{
               return next();
            }
         }
         else{
            if(to.path == '/login'){
               return next();
            }
            else{
               return next({path: '/login'});
            }
         }
      }
   };

  xhtml.open('POST', '/logincheck');
  xhtml.send();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
