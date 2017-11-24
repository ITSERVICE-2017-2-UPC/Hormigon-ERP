<template>
   <div>
      <module-title>Gestión de Compras</module-title>
      <div class="container">
         <div class="row h-padding-basic">
            <div class="col-8 col-md-6 col-lg-4">
               <select-boot :items="locales" :item-key="'id_local'" :item-text="'nombre'" 
               :item-value="'id_local'" v-model="localSelected" :label-text="'Filtrar por Local'"></select-boot>               
            </div>
            <div class="col-4" style="padding: 31px 0 0 0;">
               <bootstrap-button :is-secondary="true">Filtrar</bootstrap-button>
            </div>
         </div>
         <div class="row">
            <div class="col-8 col-md-6 col-lg-4">
               <select-boot :items="categorias" :item-key="'id_categoria'" :item-text="'nombre'" 
               :item-value="'id_categoria'" v-model="categoriaSelected" :label-text="'Filtrar por Categoría'"></select-boot>               
            </div>
            <div class="col-4" style="padding: 31px 0 0 0;">
               <bootstrap-button :is-secondary="true">Filtrar</bootstrap-button>
            </div>
         </div>
         <div class="row h-padding-basic">
            <div class="col-8 col-md-6 col-lg-4">
               <search-box></search-box>               
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import SearchBox from '../../components/inputs/SearchBox.vue'
   import SelectBoot from '../../components/inputs/Select.vue'
   import ModuleTitle from '../../components/ModuleTitle.vue'
   import BootstrapButton from '../../components/buttons/BootstrapButton.vue'

   export default {
      data: function() {
         return  {
            locales: [],
            busqueda: '',
            categorias: [],
            localSelected: '',
            categoriaSelected: '',
         }
      },
      components: {
         'module-title': ModuleTitle,
         'select-boot': SelectBoot,
         'bootstrap-button': BootstrapButton,
         'search-box': SearchBox,
      },
      beforeCreate: function() {
         this.$http.post('/logistica/compras').then(function(response) {
            console.log(response);
            this.locales = response.body.locales;
            this.categorias = response.body.categorias;
         }).catch(function(err) {
            console.log(err);
         });
      }
   }
</script>