<template>
  <Portal>
    <transition :name="transition">
      <div v-if="visible" class="sf-overlay" @click="$emit('click')"></div>
    </transition>
  </Portal>
</template>
<script>
import { Portal } from "@linusborg/vue-simple-portal";
export default {
  name: "SfOverlay",
  components: {
    Portal
  },
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
