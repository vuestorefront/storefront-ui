<template>
  <div class="sf-bottom-navigation">
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import SfBottomNavigationItem from "./_internal/SfBottomNavigationItem.vue";
Vue.component("SfBottomNavigationItem", SfBottomNavigationItem);
export default {
  name: "SfBottomNavigation",
};
</script>
<style lang="scss" src="./SfBottomNavigation.scss"></style>
