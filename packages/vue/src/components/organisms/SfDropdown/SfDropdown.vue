<template>
  <transition :name="transition">
    <div v-if="isOpen" class="sf-dropdown">
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
      reqired: true
    },
    transition: {
      type: String,
      default: "fade"
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfDropdown.scss";
</style>
