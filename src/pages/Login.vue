<template>
   <div class="container">
      <h1>HORMIGÓN ERP</h1>
      <form>
         <div class="row">
            <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
               <text-box :type="'email'" :placeholder="'e-mail'"></text-box>
            </div>
         </div>
         <div class="row">
            <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
               <text-box :type="'password'" :placeholder="'Contraseña'"></text-box> 
            </div>
         </div>
         <div class="row">
            <div class="col-xs-12">
               <bootstrap-button :type="'submit'" :is-large="true" :is-primary="true" :width="'300px'">Iniciar Sesión</bootstrap-button>
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

         }
      },
      components: {
         'text-box': TextBox,
         'bootstrap-button': BootstrapButton,
      }
   }
</script>