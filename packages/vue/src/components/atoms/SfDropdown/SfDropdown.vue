<template>
  <transition name="fade">
    <div v-show="isOpen" class="sf-dropdown">
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  name: "SfDropdown",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: "fade"
    },
    title: {
      type: String,
      default: "Name"
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfDropdown.scss";
</style>
