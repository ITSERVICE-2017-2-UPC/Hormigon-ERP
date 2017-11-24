<template>
   <div>
      <module-title>Nueva Marca</module-title>
      <div class="container">
         <div class="row h-padding-basic">
            <div class="col-12 col-md-6 col-lg-5">
               <text-box :placeholder="'Nombre de la Marca'" :label-text="'Nombre de la Marca'"
               v-model="nombreText"></text-box>
            </div>
         </div>
         <div class="row">
            <div class="col-12">
               <bootstrap-button :is-primary="true" v-on:click.native="guardarNuevaMarca()">Guardar</bootstrap-button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import TextBox from '../../components/inputs/TextBox.vue'
   import SearchBox from '../../components/inputs/SearchBox.vue'
   import ModuleTitle from '../../components/ModuleTitle.vue'
   import BootstrapButton from '../../components/buttons/BootstrapButton.vue'
   
   export default {
      data: function() {
         return {
            nombreText: '',
         }
      },
      methods: {
         guardarNuevaMarca: function() {
            if(this.nombreText != '') {
               this.$http.post('/logistica/marcas/nuevo/insert', { nombre: this.nombreText }).then(function(response) {
                  alert('La marca se ha guardado exitosamente');
                  this.$router.push('/logistica/marcas');
               }).catch(function(err) {
                  console.error(err);
               });
            }
         }
      }
      ,
      components: {
         'text-box': TextBox,
         'search-box': SearchBox,
         'module-title': ModuleTitle,
         'bootstrap-button': BootstrapButton
      }
   }
</script>