<template>
    <div>
      <button class="btn"
         v-bind:disabled="isDisabled"
         v-bind:class="{ 'btn-lg': isLarge, 'btn-primary': isPrimary, 'btn-secondary': isSecondary,
         'btn-success': isSuccess, 'btn-danger': isDanger, 'btn-sm': isSmall, 'disabled': isDisabled,
         'btn-info': isInfo, 'btn-ligth': isLigth, 'btn-dark': isDark, 'btn-block': isBlock }"
         v-bind:style="{ 'width': width, 'height': height }"
         v-bind:type="type">
         <slot></slot>
      </button>
   </div>
</template>

<script>
   export default {
      props : {
         isPrimary: {
            default: false
         },
         isLarge : {
            default: false,
         },
         isSmall : {
            default: false
         },
         isSecondary: {
            default: false
         },
         isSuccess: {
            default: false
         },
         isDanger: {
            default: false
         },
         isWarning: {
            default: false
         },
         isInfo: {
            default: false
         },
         isLigth: {
            default: false
         },
         isDark: {
            default: false
         },
         isBlock: {
            default: false
         },
         isDisabled: {
            default: false
         },
         width: {
            default: 'auto'
         },
         height: {
            default: 'auto'
         },
         type: {
            default: 'button'
         }
      }
   }
</script>