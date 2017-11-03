<template>
   <div class="bootstrap" style="background-color: transparent">
      <button class="btn btn-primary" style="padding: 5px 4px 0 4px" v-on:click="changeValue()">
         <i class="material-icons" v-if="localChecked">check_box</i>
         <i class="material-icons" v-else>check_box_outline_blank</i>
      </button>
   </div>
</template>

<script>
   export default {
      data(){
         return {
            'localChecked': false
         }
      },
      props: {
         checked: {
            default: false
         }
      },
      methods: {
         changeValue: function(){
            this.localChecked = !this.localChecked;
            console.log(this.localChecked)
            this.$emit('input', this.localChecked);
         }
      },
      beforeMount(){
         this.localChecked = this.checked;
      }
   }
</script>

<style>

</style>
