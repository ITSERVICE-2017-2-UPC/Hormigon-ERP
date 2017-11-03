<template>
   <div>
      <module-title>Gestión de Perfiles</module-title>
      <div class="bootstrap">
         <div class="container">
            <div class="h-padding-basic">
               <div class="row">
                  <div class="col-md-4">
                     <bootstrap-button :width="'100%'" :is-primary="true" v-on:click.native="redirectNuevoPerfil()">Nuevo Perfil</bootstrap-button>
                  </div>
               </div>
               <div class="h-padding-basic">
                  <div class="row">
                     <div class="col-md-8">
                        <search-box v-model="searchValue" v-on:search="search()"></search-box>
                     </div>
                  </div>
               </div>
               <div class="row h-padding-basic h-overflow-scroll">
                  <div class="col-lg-12">
                     <table class="h-table">
                        <th>Nombre</th>
                        <tr v-for="perfil in perfiles" v-bind:key="perfil.id_perfil">
                           <td>{{ perfil.nombre }}</td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import ModuleTitle from '../../../components/ModuleTitle.vue'
   import BootstrapButton from '../../../components/buttons/BootstrapButton.vue'
   import SearchBox from '../../../components/inputs/SearchBox.vue'

   export default {
      data(){
         return {
            searchValue: '',
            perfiles: [
               {
                  id_perfil: 1,
                  nombre: 'Perfil 1'
               },
               {
                  id_perfil: 2,
                  nombre: 'Perfil 2'
               },
               {
                  id_perfil: 3,
                  nombre: 'Perfil 3'
               }
            ]
         }
      },
      methods: {
         search: function(){
            alert(this.searchValue);
         },
         redirectNuevoPerfil: function(){
            this.$router.push('/config/admin/perfil/nuevo');
         }
      },
      components: {
         'module-title': ModuleTitle,
         'bootstrap-button': BootstrapButton,
         'search-box': SearchBox,
      }
   }
</script>