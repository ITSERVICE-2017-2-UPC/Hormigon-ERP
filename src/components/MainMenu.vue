<template>
   <div>
      <div class="sidebar-wrapper" v-bind:class="{'sidebar-lg': !isHidden, 'sidebar-sm': isHidden}">
         <div class="sidebar-container">
            <div class="sidebar-logo">
               <span>Hormigón ERP</span>
            </div>
            <div class="divider"></div>
            <div v-for="item in MenuItems" v-bind:key="item.index">
               <div class="sidebar-item" v-on:click="setActiveIndexId(item.index)">
                  <span>{{item.name}}</span>
               </div>
               <div v-for="subitem in item.paths" v-bind:key="subitem.index">
                  <div class="menu-item-list" v-bind:style="{ 'height': (item.index === activeIndex) ? '46px' : '0px' }">
                     <div class="menu-item" v-on:click="mainRedirect(subitem.path)">
                        {{subitem.name}}
                     </div>
                  </div>
               </div>
            </div>
            <div class="sidebar-item" v-on:click="redirectLogout()">
               <span>Cerrar Sesión</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return {
         activeIndex: '',
         MenuItems: [
            {
               'index': 1,
               'name': 'Configuración',
               'paths': [
                  {
                     'name': 'Usuario',
                     'index': 1,
                     'path': '/config/usuario'
                  },
                  {
                     'name': 'Gestión de Usuarios',
                     'index': 2,
                     'path': '/config/admin/usuario'
                  },
                  {
                     'name': 'Proveedores',
                     'index': 3,
                     'path': '/config/proveedor'
                  }
               ]               
            },
            {
               'index': 2,
               'name': 'Logística',
               'paths': [
                  {
                     'name': 'Name1',
                     'index': 2,
                     'path': '/logistica/name1'
                  }
               ]
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
      },
      redirectLogout: function(){
         this.$http.post('/logout').then(function(){
            document.location.href = '/';
         })
         .cath(function(err){
            console.log(err);
         });
      },
      setActiveIndexId(indexID){
         this.activeIndex = indexID;
      }
   }
}
</script>