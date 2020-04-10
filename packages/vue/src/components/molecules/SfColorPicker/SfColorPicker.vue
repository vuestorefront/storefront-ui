<template>
  <div class="sf-color-picker">
    <transition>
      <div v-if="isOpen" class="sf-color-picker__container">
        <slot name="label">
          <div v-if="label" class="sf-color-picker__label">{{ label }}</div>
        </slot>
        <slot />
        <slot name="close">
          <SfIcon
            v-if="closeIcon"
            :icon="closeIcon"
            role="button"
            class="sf-color-picker__close"
            :aria-pressed="!isOpen"
            @click="close"
          />
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfColorPicker",
  components: { SfIcon },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    closeIcon: {
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
@import "~@storefront-ui/shared/styles/components/molecules/SfColorPicker.scss";
</style>
