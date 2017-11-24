<template>
   <div>
      <module-title>Gestión de Categorías</module-title>
      <div class="container">
         <div class="row h-padding-basic">
            <div class="col-12">
               <search-box :placeholder="'Buscar Categoría'" v-model="categoriaSearchText"
               v-on:search="buscarCategoria()"></search-box>
            </div>
         </div>
         <div class="row h-padding-basic" style="padding-left: 15px">
            <bootstrap-button v-on:click.native="nuevaCategoriaRedirect()">Nueva Categoría</bootstrap-button>
         </div>
         <div class="row h-padding-basic">
            <div class="col-12 h-table-wrap h-overflow-scroll">
               <table class="h-table">
                  <th>Acción</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <tr v-for="categoria in categorias" v-bind:key="categoria.id_categoria">
                     <td> Modificar / Eliminar </td>
                     <td> {{ categoria.nombre }} </td>
                     <td> {{ categoria.descripcion }} </td>
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
            categorias: [],
            categoriaSearchText: '',
         }
      },
      components: {
         'search-box': SearchBox,
         'module-title': ModuleTitle,
         'bootstrap-button': BootrapButton,
      },
      methods: {
         buscarCategoria: function() {
            this.$http.post('/logistica/categorias/buscar', { nombre: this.categoriaSearchText }).then(function(response) {
               console.log(response);
               this.categorias = response.body;
            }).catch(function(err) {
               console.error(err);
            });
         },
         nuevaCategoriaRedirect: function() {
            this.$router.push('/logistica/categorias/nuevo');
         }
      }
   }
</script>