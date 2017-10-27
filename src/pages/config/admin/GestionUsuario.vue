<template>
   <div>
      <module-title>Gestion de Usuarios</module-title>
      <div class="bootstrap">
         <div class="container">
            <div class="row h-padding-basic">
               <div class="col-md-2">
                  <bootstrap-button :is-secondary="true">Nuevo Usuario</bootstrap-button>   
               </div>
            </div>
            <div class="row h-padding-basic">
               <div class="col-md-5">
                  <search-box v-on:search="search()" v-model="searchValue"></search-box>
               </div>
            </div>
            <div class="row h-padding-basic h-overflow-scroll">
               <div class="col-lg-12">
                  <table class="h-table">
                     <th>Acción</th>
                     <th>Nombres</th>
                     <th>Correo</th>
                     <th>Perfil</th>
                     <tr v-for="user in usuarios" v-bind:key="user.id_usuario">
                        <td>Editar / Eliminar</td>
                        <td>{{ user.nombres }}</td>
                        <td>{{ user.correo }}</td>
                        <td>{{ user.perfil.nombre }}</td>
                     </tr>
                  </table>
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
      data() {
         return {
            searchValue: '',
            usuarios: [
               {
                  id_usuario: 1, 
                  nombres: 'Fabio Catriel Cruz Gonella',
                  correo: 'catrielcruz1995@gmail.com',
                  perfil: {
                     nombre: 'Administrador'
                  }
               },
               {
                  id_usuario: 2, 
                  nombres: 'Claudio Alfredo Aaron Alejo Alarcón',
                  correo: 'calejo@gmail.com',
                  perfil: {
                     nombre: 'Administrador'
                  }
               }
            ]
         }
      },
      components: {
         'module-title': ModuleTitle,
         'bootstrap-button': BootstrapButton,
         'search-box': SearchBox,
      },
      methods: {
         updateSearchalue: function(value) {
            this.searchValue = value;
         },
         search: function() {
            alert('buscado');
         }
      }
   }
</script>