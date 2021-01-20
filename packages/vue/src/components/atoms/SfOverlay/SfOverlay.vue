<template functional>
  <transition :name="props.transition">
    <div
      v-if="props.visible"
      ref="overlay"
      :class="[data.class, data.staticClass, 'sf-overlay']"
      @click="listeners.click || (() => {})"
    ></div>
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
      default: "sf-fade",
    },
    /**
     * Visibility state
     */
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfOverlay.scss";
</style>
