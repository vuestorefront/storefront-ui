<template>
  <transition :name="transition">
    <div v-if="visible" ref="overlay" class="sf-overlay" v-bind="$attrs"></div>
  </transition>
</template>
<script>
export default {
  name: "SfOverlay",
  compatConfig: {
    MODE: 3, //temporary and to be removed on removal of @vue/compat
  },
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
