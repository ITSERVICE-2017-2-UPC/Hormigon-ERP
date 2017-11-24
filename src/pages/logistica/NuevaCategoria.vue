<template>
   <div>
      <module-title>Nueva Categoría</module-title>
      <div class="container">
         <div class="row h-padding-basic">
            <div class="col-12 col-md-6 col-lg-5">
               <text-box :placeholder="'Nombre Categoría'" :label-text="'Nombre Categoría'"
               v-model="nombreText"></text-box>
            </div>
         </div>
         <div class="row">
            <div class="col-12 col-md-6 col-lg-5">
               <text-box :placeholder="'Nombre Descripción'" :label-text="'Descripción Categoría'"
               v-model="descripcionCategoria"></text-box>
            </div>
         </div>
         <div class="row">
            <div class="col-12">
               <bootstrap-button :is-primary="true" v-on:click.native="guardarNuevaCategoria()">Guardar</bootstrap-button>
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
            descripcionCategoria: '',
         }
      },
      components: {
         'text-box': TextBox,
         'search-box': SearchBox,
         'module-title': ModuleTitle,
         'bootstrap-button': BootstrapButton,
      },
      methods: {
         guardarNuevaCategoria: function() {
            if(this.nombreText == '' || this.descripcionCategoria == '') {
               return;
            }
            this.$http.post('/logistica/categorias/nuevo/insert', 
            { 
               nombre: this.nombreText, descripcion: this.descripcionCategoria 
            }).then(function(response) {
               alert('La categoria ha sido creada exitosamente');
               this.$router.push('/logistica/categorias');
            }).catch(function(err) {
               console.error(err);
            });
         }
      }
   }
</script>