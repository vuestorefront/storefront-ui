<template>
  <div class="sf-dropdown">
    <SfOverlay :visible="isOpen" class="sf-dropdown__overlay" @click="close" />
    <transition name="sf-dropdown">
      <div v-show="isOpen" class="sf-dropdown__container">
        <slot name="title">
          <div v-if="title" class="sf-dropdown__title">{{ title }}</div>
        </slot>
        <slot />
        <slot name="cancel">
          <SfButton
            class="sf-button--full-width sf-dropdown__cancel"
            @click="close"
            >Cancel</SfButton
          >
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfDropdown",
  components: {
    SfOverlay,
    SfButton
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    close() {
      this.$emit("click:close");
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfDropdown.scss";
</style>
