<template>
  <transition name="fade">
    <div v-if="true" class="sf-mega-menu" v-bind="$attrs">
      <div class="sf-mega-menu__container">
        <slot />
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
Vue.component("SfMegaMenuColumn", SfMegaMenuColumn);
export default {
  name: "SfMegaMenu",
  inheritAttrs: false,
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfMegaMenu.scss";
</style>
