<template>
   <div class="bootstrap">
      <div class="form-group">
         <input ref="input" v-bind:type="type" class="form-control" v-bind:placeholder="placeholder"
         v-bind:value="value" v-on:input="updateValue($event.target.value)">
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
         },
         value: {
            default: ''
         }
      },
      methods: {
         updateValue: function(value){
            var formatedValue = value.trim();
            this.$refs.input.value = formatedValue;
            this.$emit('input', formatedValue);
         }
      }
   }
</script>