<template>
   <div>
      <div class="container-fluid register-title">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div>Solicitud de Registro</div>
               </div>
            </div>
         </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
               <div class="module-subtitle text-align-left">Datos del Usuario</div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
               <text-box :placeholder="'Correo'"></text-box>
            </div>
         </div>
         <div class="row">
            <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
               <text-box :placeholder="'Nombres'"></text-box>
            </div>
         </div>
         <div class="row">
            <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
               <text-box :placeholder="'Apellidos'"></text-box>
            </div>
         </div>
         <div class="row">
            <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
               <v-select v-model="empresaSelect" label="nombre" :options="empresas"></v-select>
            </div>
         </div>
         <div class="row h-padding-basic">
            <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
               <bootstrap-button :is-primary="true" :is-large="true">Solicitar Registro</bootstrap-button>
            </div>
         </div>
         <div class="row h-padding-basic">
            <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
               <bootstrap-button :is-secondary="true" :is-large="true" v-on:click.native="redirectLogin()">Cancelar</bootstrap-button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import vSelect from 'vue-select'
   import TextBox from '../components/inputs/TextBox.vue'
   import ModuleTitle from '../components/ModuleTitle.vue'
   import BootstrapButton from '../components/buttons/BootstrapButton.vue'

   export default {
      data() {
         return {
            empresaSelect: null,
            empresas: [
               {
                  id_empresa: 1,
                  nombre: 'Empresa 1'
               },
               {
                  id_empresa: 2,
                  nombre: 'Empresa 2'
               }
            ]
         }
      },
      components: {
         vSelect,
         'text-box': TextBox,
         'module-title': ModuleTitle,
         'bootstrap-button': BootstrapButton,
      },
      methods: {
         redirectLogin: function() {
            this.$router.push('/login');
         }
      }
   }
</script>

<style>

</style>
