<template functional>
  <component
    :is="injections.components.SfButton"
    :class="[
      data.class,
      data.staticClass,
      'sf-button--pure sf-color',
      { 'is-active': props.selected },
    ]"
    :style="{
      ...data.style,
      ...data.staticStyle,
      '--color-background': props.color,
    }"
    :aria-pressed="props.selected.toString()"
    :data-testid="props.color"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <transition name="sf-bounce">
      <!-- @slot Use it to replace badge to custom element -->
      <slot name="badge" v-bind="{ props }">
        <component
          :is="injections.components.SfBadge"
          :class="{
            'display-none':
              !props.hasBadge || (!props.selected && props.hasBadge),
          }"
          class="sf-color__badge smartphone-only"
        >
          <component
            :is="injections.components.SfIcon"
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
