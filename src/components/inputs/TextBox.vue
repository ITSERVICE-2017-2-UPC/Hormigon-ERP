<template>
   <div class="bootstrap">
      <div class="form-group">
         <input v-bind:type="type" class="form-control" v-bind:placeholder="placeholder">
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            
         }
      },
      props: {
         type: {
            default: 'text'
         },
         placeholder: {
            default: ''
         }
      }
   }
</script>