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
export default {
  name: "SfMegaMenu",
  inheritAttrs: false,
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfMegaMenu.scss";
</style>
