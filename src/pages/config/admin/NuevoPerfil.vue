<template>
   <div>
      <module-title>Nuevo Perfil</module-title>
       <div>
         <div class="container">
            <div class="row" style="padding: 0 0 0 20px">
               <div class="col-md-5 h-padding-basic">
                  <text-box :placeholder="'Nombre'" v-model="nombre"></text-box>               
               </div>
            </div>
            <div class="row">
               <div class="module-subtitle" style="padding: 0px 0px 0px 20px">Permisos :</div>
            </div>
            <div>
               <div class="row h-padding-basic h-overflow-scroll">
                  <div class="col-lg-12">
                     <table class="h-table">
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Seleccionado</th>
                        <tr v-for="perfil in perfiles" v-bind:key="perfil.id_perfil">
                           <td>{{ perfil.nombre }}</td>
                           <td>{{ perfil.descripcion }}</td>
                           <td class="text-align-center">
                              <check-box v-model="perfil.selected"></check-box>
                           </td>
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
   import TextBox from '../../../components/inputs/TextBox.vue'
   import CheckBox from '../../../components/inputs/CheckBox.vue'

   export default {
      data(){
         return {
            nombre: '',
            perfiles: [
               {
                  id_perfil: 1,
                  nombre: 'Perfil 1',
                  descripcion: 'Perfil 1',
                  selected: false,
               },
               {
                  id_perfil: 2,
                  nombre: 'Perfil 2',
                  descripcion: 'Perfil 2',
                  selected: false,
               }
            ],
         }
      },
      methods: {

      },
      components:{
         'module-title': ModuleTitle,
         'bootstrap-button': BootstrapButton,
         'text-box': TextBox,
         'check-box': CheckBox
      }
   }
</script>

<style>

</style>
