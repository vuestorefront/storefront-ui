<template>
  <ul class="sf-list">
    <slot />
  </ul>
</template>
<script>
import SfListItem from "./_internal/SfListItem.vue";
import Vue from "vue";
Vue.component("SfListItem", SfListItem);
export default {
  name: "SfList",
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfList.scss";
</style>
