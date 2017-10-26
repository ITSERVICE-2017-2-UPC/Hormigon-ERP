<template>
   <div class="bootstrap">
      <div class="container">
         <div style="padding: 50px 0px 25px 0px">
            <h1>HORMIGÓN ERP</h1>
         </div>
         <form>
            <div class="row">
               <div class="col-xs-10 offset-xs-1 col-sm-6 offset-sm-3">
                  <text-box :type="'email'" :placeholder="'e-mail'" v-model="correo"></text-box>
               </div>
            </div>
            <div class="row">
               <div class="col-xs-10 offset-xs-1 col-sm-6 offset-sm-3">
                  <text-box :type="'password'" :placeholder="'Contraseña'" v-model="clave"></text-box> 
               </div>
            </div>
            <div class="row">
               <div class="col-lg-6 offset-lg-3">
                  <bootstrap-button :type="'button'" :is-large="true" :is-primary="true" :width="'300px'" v-on:click.native="sendLogin()">Iniciar Sesión</bootstrap-button>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-6 offset-lg-3" style="margin-top:15px">
                  <bootstrap-button :is-large="true" :is-success="true" :width="'300px'">Registrarse</bootstrap-button>
               </div>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
   import TextBox from '../components/inputs/TextBox.vue'
   import BootstrapButton from '../components/buttons/BootstrapButton.vue'

   export default {
      data() {
         return {
            correo: '',
            clave: '',
         }
      },
      components: {
         'text-box': TextBox,
         'bootstrap-button': BootstrapButton,
      },
      methods: {
         sendLogin : function(){
            this.$http.post('/login', { correo: this.correo, clave: this.clave} ).then(function(response){
               if(response){
                  return this.$router.go('/');
               }
            }).catch(function(err){
               return console.error(err);
            });
         }
      }
   }
</script>