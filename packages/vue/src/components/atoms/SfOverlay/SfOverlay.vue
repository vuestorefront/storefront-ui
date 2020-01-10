<template>
  <transition :name="transition">
    <div v-if="visible" class="sf-overlay" @click="$emit('click')"></div>
  </transition>
</template>
<script>
export default {
  name: "SfOverlay",
  props: {
    /**
     * Transition effect to apply when overlay visibility is changed
     */
    transition: {
      type: String,
      default: "fade"
    },
    /**
     * Visibility state
     */
    visible: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfOverlay.scss";
</style>
