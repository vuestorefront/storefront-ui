<template>
  <div class="sf-bottom-navigation">
    <!-- @slot Use this slot to add custom content in bottom navigation -->
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import SfBottomNavigationItem from "./_internal/SfBottomNavigationItem.vue";
Vue.component("SfBottomNavigationItem", SfBottomNavigationItem);
export default {
  name: "SfBottomNavigation"
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfBottomNavigation.scss";
</style>
