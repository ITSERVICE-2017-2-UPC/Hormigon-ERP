<template>
   <div>
      <div class="sidebar-wrapper" v-bind:class="{'sidebar-lg': !isHidden, 'sidebar-sm': isHidden}">
         <div class="sidebar-container">
            <div class="sidebar-logo">
               <span>Hormigón ERP</span>
            </div>
            <div class="divider"></div>
            <div v-for="item in MenuItems" v-bind:key="item.name">
               <div class="sidebar-item" v-on:click="mainRedirect(item.path)">
                  <span>{{item.name}}</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return {
         MenuItems: [
            {
               name: 'Compras',
               path: '/compras'
            },
            {
               name: 'Ventas',
               path: '/ventas'
            },
            {
               name: 'Inventarios',
               path: '/inventarios'
            },
            {
               name: 'Contabilidad',
               path: '/contabilidad'
            },
            {
               name: 'Finanzas',
               path: '/finanzas'
            },
            {
               name: 'Configuración',
               path: '/config'
            }
         ]
      }
   },
   props: {
      'isHidden': {
         default: false,
      }
   },
   methods: {
      mainRedirect: function(route_path){
         console.log(route_path);
         this.$router.push(route_path);
      }
   }
}
</script>