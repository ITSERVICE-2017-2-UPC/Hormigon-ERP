<template>
   <div>
      <module-title>Configuración</module-title>
      <router-view></router-view>
   </div>
</template>

<script>
   import ModuleTitle from '../components/ModuleTitle.vue'
   export default {
      components: {
         'module-title': ModuleTitle
      }
   }
</script>

<style>

</style>
