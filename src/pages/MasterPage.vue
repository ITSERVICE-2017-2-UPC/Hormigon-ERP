<template>
   <div>
      <div class="hamburger-container" v-on:click="ham_change()" 
      v-bind:class="{'ham-change': ham_stat, 'hamburger-container-transfer': ham_stat}"
      v-bind:style="{'visible': isSmall}">
         <div class="bar1"></div>
         <div class="bar2"></div>
         <div class="bar3"></div>
      </div>
      <main-menu :is-hidden="isHidden"></main-menu>
      <div class="main-router-wrapper" v-bind:class="{'main-router-lg': !isSmall}" style="text-align: left">
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
import MainMenu from '../components/MainMenu.vue'

export default {
   components: {
      'main-menu': MainMenu
   },
   data(){
      return {
         ham_stat: false,
         isHidden: false,
         isSmall: false,
         width: 0,
      }
   },
   methods: {
      changeHidden: function(){
         this.isHidden = !this.isHidden;
      },
      checkWindowSize: function(){
         this.width = document.documentElement.clientWidth
         if(document.documentElement.clientWidth < 992){
            this.isHidden = true;
            this.ham_stat = false;
            this.isSmall = true;
         }
         else{
            this.isHidden = false;
            this.isSmall = false;
         }
      },
      ham_change: function(){
         this.ham_stat = !this.ham_stat;
         this.isHidden = !this.isHidden;
      }
   },
   mounted() {
      this.$nextTick(function(){
         window.addEventListener('resize', this.checkWindowSize);
         this.checkWindowSize();
      });
   },
   beforeDestroy() {
      window.removeEventListener('resize', this.checkWindowSize());
   },
}
</script>