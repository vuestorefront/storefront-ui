<template>
  <div class="sf-color-picker" :class="{ 'sf-color-picker--active': isOpen }">
    <transition name="sf-color-picker" mode="out-in">
      <div v-if="!isOpen" key="1" class="sf-color-picker__open">
        <slot name="open">
          <SfButton
            class="color-secondary sf-color-picker__open--button"
            @click="toggle"
            >+ Colors</SfButton
          >
        </slot>
      </div>
      <div v-else key="2" class="sf-color-picker__colors">
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
            @click="toggle"
          />
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfColorPicker",
  components: { SfIcon, SfButton },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    closeIcon: {
      type: String,
      default: "",
    },
  },
  methods: {
    toggle() {
      this.$emit("click:toggle");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfColorPicker.scss";
</style>
