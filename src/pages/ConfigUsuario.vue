<template>
   <div>
      <module-title>Usuario</module-title>
      <div>
         <div class="bootstrap">
            <div class="container">
               <div class="container">
                  <div class="module-subtitle">Datos Personales</div>         
                  <div class="row">
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :placeholder="'Nombres'"></text-box>
                     </div>
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :placeholder="'Apellidos'"></text-box>                     
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-lg-12">
                        <bootstrap-button :is-primary="true">Guardar</bootstrap-button>
                     </div>
                  </div>
                  <div class="divider"></div>
                  <div class="module-subtitle">Datos de Usuario</div>
                  <div class="row">
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :placeholder="'Correo'"></text-box>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :placeholder="'Contraseña'"></text-box>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6 offset-md-0 col-sm-10 offset-sm-1">
                        <text-box :placeholder="'Repetir Contraseña'"></text-box>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-lg-12">
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
      components: {
         'module-title': ModuleTitle,
         'text-box': TextBox,
         'bootstrap-button': BootstrapButton,
      }
   }
</script>