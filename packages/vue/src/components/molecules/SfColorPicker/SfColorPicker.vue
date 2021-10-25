<template>
  <div class="sf-color-picker" :class="{ 'sf-color-picker--active': isOpen }">
    <transition name="sf-color-picker" mode="out-in">
      <div
        v-if="!isOpen"
        key="color-picker-button"
        class="sf-color-picker__button smartphone-only"
      >
        <!-- @slot Use this slot to replace open button. -->
        <slot name="open" v-bind="{ toggle }">
          <SfButton
            class="color-secondary sf-color-picker__button-open"
            @click="toggle"
            >+ Colors</SfButton
          >
        </slot>
      </div>
      <div v-else key="color-picker-colors" class="sf-color-picker__colors">
        <SfOverlay
          :visible="isOpen"
          class="sf-color-picker__colors__overlay smartphone-only"
        />
        <!-- @slot Use this slot to replace label. -->
        <slot name="label" v-bind="{ label }">
          <div v-if="label" class="sf-color-picker__label smartphone-only">
            {{ label }}
          </div>
        </slot>
        <!-- @slot Use this slot to place content inside the color picker.-->
        <slot />
        <!-- @slot Use this slot to replace close button. -->
        <slot name="close" v-bind="{ hasClose, toggle, isOpen }">
          <SfButton
            v-if="hasClose"
            class="sf-button--text sf-color-picker__close smartphone-only"
            aria-label="Close button"
            :aria-pressed="!isOpen"
            @click="toggle"
          >
            <SfIcon icon="cross" />
          </SfButton>
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";

export default {
  name: "SfColorPicker",
  components: { SfIcon, SfButton, SfOverlay },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    hasClose: {
      type: Boolean,
      default: false,
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
