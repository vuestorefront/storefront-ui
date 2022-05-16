<template functional>
  <component
    :is="injections.components.SfButton"
    :class="[data.class, data.staticClass, 'sf-circle-icon']"
    v-bind="data.attrs"
    :aria-label="props.ariaLabel"
    :disabled="props.disabled"
    v-on="listeners"
  >
    <slot>
      <component
        :is="injections.components.SfIcon"
        aria-hidden="true"
        class="sf-circle-icon__icon"
        :icon="props.icon"
        :size="props.iconSize"
      />
    </slot>
  </component>
</template>
<script>
import SfButton from "../SfButton/SfButton.vue";
import SfIcon from "../SfIcon/SfIcon.vue";
export default {
  name: "SfCircleIcon",
  inject: {
    components: {
      default: {
        SfButton,
        SfIcon,
      },
    },
  },
  props: {
    icon: {
      type: [String, Array],
      default: "home",
    },
    iconSize: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: "button-icon",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfCircleIcon.scss";
</style>
