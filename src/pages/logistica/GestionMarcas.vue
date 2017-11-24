<template>
   <div>
      <module-title>Gestión de Marcas</module-title>
      <div class="container">
         <div class="row h-padding-basic">
            <div class="col-12">
               <search-box :placeholder="'Buscar Marca'" v-model="marcaSearchText"
               v-on:search="buscarMarca()"></search-box>
            </div>
         </div>
         <div class="row h-padding-basic" style="padding-left: 15px">
            <bootstrap-button v-on:click.native="nuevaMarcaRedirect()" :is-secondary="true">Nueva Marca</bootstrap-button>
         </div>
         <div class="row h-padding-basic">
            <div class="col-12 h-table-wrap h-overflow-scroll">
               <table class="h-table">
                  <th>Acción</th>
                  <th>Nombre</th>
                  <tr v-for="marca in marcas" v-bind:key="marca.id_marca">
                     <td> Modificar / Eliminar </td>
                     <td> {{ marca.nombre }} </td>
                  </tr>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import SearchBox from '../../components/inputs/SearchBox.vue'
   import ModuleTitle from '../../components/ModuleTitle.vue'
   import BootrapButton from '../../components/buttons/BootstrapButton.vue'

   export default {
      data: function() {
         return {
            marcas: [],
            marcaSearchText: '',
         }
      },
      components: {
         'search-box': SearchBox,
         'module-title': ModuleTitle,
         'bootstrap-button': BootrapButton,
      },
      methods: {
         buscarMarca: function() {
            this.$http.post('/logistica/marcas/buscar', { nombre: this.marcaSearchText }).then(function(response) {
               this.marcas = response.body;
            }).catch(function(err) {
               console.error(err);
            });
         },
         nuevaMarcaRedirect: function() {
            this.$router.push('/logistica/marcas/nuevo');
         }
      }
   }
</script>