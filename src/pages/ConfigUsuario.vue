<template>
   <div>
      <module-title>Usuario</module-title>
      <div>
          <div>
            <div class="container">
               <div class="container">
                  <div class="module-subtitle">Datos Personales</div>         
                  <div class="row">
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :placeholder="'Nombres'" :label-text="'Nombres'" v-model="nombres"></text-box>
                     </div>
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :placeholder="'Apellidos'" v-model="apellidos" :label-text="'Apellidos'"></text-box>                     
                     </div>
                  </div>
                  <div class="row">
                     <div style="padding: 0 0 0 15px">
                        <bootstrap-button :is-primary="true" v-on:click.native="savePersonalInfo()">Guardar</bootstrap-button>
                     </div>
                  </div>
                  <div class="divider"></div>
                  <div class="module-subtitle">Datos de Usuario</div>
                  <div class="row">
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :label-text="'Correo'" :placeholder="'Correo'"></text-box>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :label-text="'Contraseña'" :placeholder="'Contraseña'"></text-box>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :label-text="'Repetir Contraseña'" :placeholder="'Repetir Contraseña'"></text-box>
                     </div>
                  </div>
                  <div class="row">
                     <div style="padding: 0 0 0 15px">
                        <bootstrap-button :is-primary="true">Guardar</bootstrap-button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import ModuleTitle from '../components/ModuleTitle.vue'
   import TextBox from '../components/inputs/TextBox.vue'
   import BootstrapButton from '../components/buttons/BootstrapButton.vue'

   export default {
      data(){
         return {
            nombres: '',
            apellidos: '',
         }
      },
      components: {
         'module-title': ModuleTitle,
         'text-box': TextBox,
         'bootstrap-button': BootstrapButton,
      },
      methods: {
         savePersonalInfo: function(){
            this.$http.post('/config/usuario/update/personal/' + localStorage.getItem('id_usuario'), {nombres: this.nombres, apellidos: this.apellidos})
            .then(function(response){
               console.log(response);
               alert('Datos personales actualizados correctamente.');
            })
            .catch(function(err){
               console.error(err);
            });
         }
      }
   }
</script>