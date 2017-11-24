<template>
    <div>
      <div class="form-group">
         <div v-if="labelText != ''">
            <label v-bind:for="id">{{ labelText }}</label>
         </div>
         <input ref="input" v-bind:id="id" v-bind:type="type" class="form-control" v-bind:placeholder="placeholder"
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
         },
         labelText: {
           default: ''
         },
         id: {
            default: 0
         }
      },
      methods: {
         updateValue: function(value){
            this.$refs.input.value = value;
            this.$emit('input', value);
         }
      }
   }
</script>