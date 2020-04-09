<template>
  <transition name="transition">
    <div v-show="isOpen" class="sf-dropdown">
      <div class="sf-dropdown__heading">{{ title }}</div>
      <slot />
      <slot name="cancel">
        <!-- todo: add color-gray modifier for SfButton-->
        <SfButton class="sf-button--full-width" @click="close">Cancel</SfButton>
      </slot>
    </div>
  </transition>
</template>
<script>
import SfButton from "../SfButton/SfButton.vue";
export default {
  name: "SfDropdown",
  components: {
    SfButton
  },
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
@import "~@storefront-ui/shared/styles/components/atoms/SfDropdown.scss";
</style>
