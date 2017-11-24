<template>
   <div>
      <div class="form-group">
         <div v-if="labelText != ''">
            <label for="form-select"> {{ labelText }} </label>
         </div>
         <select class="form-control" id="form-select" v-model="selected">
            <option v-for="item in items" v-bind:key="item[itemKey]" v-bind:value="item[itemValue]">
               {{ item[itemText] }}
            </option>
         </select>
      </div>
   </div>
</template>

<script>
   export default {
      data: function() {
         return {
            selected: ''
         }
      },
      props: {
         items: {
            default: function() {
               return [];
            }
         },
         itemKey: {
            default: ''
         },
         itemText: {
            default: ''
         },
         itemValue: {
            default: ''
         },
         labelText: {
            default: ''
         }
      },
      methods: {
         updateValue : function(value) {
            this.$emit('input', this.selected);
         }
      },
      watch: {
         selected: function(val, oldVal) {
            this.$emit('input', val);
         }
      }
   }
</script>