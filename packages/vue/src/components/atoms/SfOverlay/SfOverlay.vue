<template>
  <Portal>
    <transition :name="transition">
      <div
        v-if="visible"
        ref="overlay"
        class="sf-overlay"
        :class="[staticClass, className]"
        @click="$emit('click')"
      ></div>
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
  },
  computed: {
    staticClass() {
      return this.$vnode.data.staticClass;
    },
    className() {
      return this.$vnode.data.class;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfOverlay.scss";
</style>
