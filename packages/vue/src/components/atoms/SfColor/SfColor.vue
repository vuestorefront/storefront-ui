<template>
  <component
    :is="components.SfButton"
    :class="['sf-button--pure sf-color', { 'is-active': selected }]"
    :style="{
      '--color-background': color,
    }"
    :aria-pressed="selected.toString()"
    :data-testid="color"
    v-bind="$attrs"
  >
    <transition name="sf-bounce">
      <!-- @slot Use it to replace badge to custom element -->
      <slot name="badge">
        <component
          :is="components.SfBadge"
          v-if="selected && hasBadge"
          class="sf-color__badge smartphone-only"
        >
          <component
            :is="components.SfIcon"
            size="16px"
            color="white"
            icon="check"
            aria-hidden="true"
          />
        </component>
      </slot>
    </transition>
  </component>
</template>
<script>
import SfBadge from "../SfBadge/SfBadge.vue";
import SfIcon from "../SfIcon/SfIcon.vue";
import SfButton from "../SfButton/SfButton.vue";
export default {
  name: "SfColor",
  compatConfig: {
    MODE: 3, //temporary and to be removed on removal of @vue/compat
  },
  inject: {
    components: {
      default: {
        SfBadge,
        SfIcon,
        SfButton,
      },
    },
  },
  props: {
    color: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    hasBadge: {
      type: Boolean,
      default: true,
    },
  },
  style(color) {
    return color;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfColor.scss";
</style>
