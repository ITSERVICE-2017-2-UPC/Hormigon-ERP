<template>
   <div class="container">
      <h1>HORMIGÓN ERP</h1>
      <form>
         <div class="row">
            <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
               <text-box :type="'email'" :placeholder="'e-mail'" v-model="username"></text-box>
            </div>
         </div>
         <div class="row">
            <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
               <text-box :type="'password'" :placeholder="'Contraseña'" v-model="password"></text-box> 
            </div>
         </div>
         <div class="row">
            <div class="col-xs-12">
               <bootstrap-button :type="'button'" :is-large="true" :is-primary="true" :width="'300px'" v-on:click.native="sendLogin()">Iniciar Sesión</bootstrap-button>
            </div>
         </div>
         <div class="row">
            <div class="col-xs-12" style="margin-top:15px">
               <bootstrap-button :is-large="true" :is-success="true" :width="'300px'">Registrarse</bootstrap-button>
            </div>
         </div>
      </form>
   </div>
</template>

<script>
   import TextBox from '../components/inputs/TextBox.vue'
   import BootstrapButton from '../components/buttons/BootstrapButton.vue'

   export default {
      data() {
         return {
            username: '',
            password: '',
         }
      },
      components: {
         'text-box': TextBox,
         'bootstrap-button': BootstrapButton,
      },
      methods: {
         sendLogin : function(){
            this.$http.post('/login', { username: this.username, password: this.password} ).then(function(response){
               if(response){
                  return console.log(response);
               }
            }).catch(function(err){
               return console.error(err);
            });
         }
      }
   }
</script>