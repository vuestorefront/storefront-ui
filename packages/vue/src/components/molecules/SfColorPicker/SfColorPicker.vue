<template>
  <div class="sf-color-picker">
    <transition>
      <div v-show="isOpen" class="sf-color-picker__container">
        <slot name="label">
          <p class="sf-color-picker__label">{{ label }}</p>
        </slot>
        <slot />
        <slot name="close">
          <SfIcon
            icon="cross"
            role="button"
            :aria-pressed="isOpen"
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
