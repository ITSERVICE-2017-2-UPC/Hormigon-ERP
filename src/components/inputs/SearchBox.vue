<template>
    <div>
      <div class="input-group">
         <input ref="input" type="text" class="form-control" v-bind:placeholder="placeholder" 
         v-bind:value="value" v-on:input="updateValue($event.target.value)">
         <div class="input-group-btn">
            <button class="btn btn-secondary" style="; padding: 0px 10px 0px 10px" v-on:click="emitSearchEvent()">
               <i class="material-icons" style="height: 15px">search</i>
            </button>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      data(){
         return {

         }
      },
      props: {
         value: {
            default: ''
         },
         placeholder: {
            default: 'Buscar...'
         }
      },
      methods: {
         updateValue: function(value){
            var formatedValue = value.trim();
            this.$refs.input.value = formatedValue;
            this.$emit('input', formatedValue);
         },
         emitSearchEvent: function() {
            this.$emit('search');
         }
      }
   }
</script>