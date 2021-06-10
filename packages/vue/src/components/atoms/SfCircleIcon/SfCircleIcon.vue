<template functional>
  <component
    :is="injections.components.SfButton"
    :class="[data.class, data.staticClass, 'sf-circle-icon']"
    v-bind="data.attrs"
    :disabled="props.disabled"
    v-on="listeners"
  >
    <!--@slot Custom content that will replace default icon. can be used for inlined SVG's-->
    <slot>
      <component
        :is="injections.components.SfIcon"
        aria-hidden="true"
        class="sf-circle-icon__icon"
        v-bind="data.attrs"
        :icon="props.icon.icon"
        :color="props.icon.color"
        :size="props.icon.size"
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
      type: Object,
      default: () => {
        return {
          icon: "home",
          size: "1.5rem",
        };
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfCircleIcon.scss";
</style>
