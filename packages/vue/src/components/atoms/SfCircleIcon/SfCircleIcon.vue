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
        :icon="props.icon"
        :color="props.iconColor"
        :size="props.iconSize"
        :badge-label="props.badgeLabel"
        :has-badge="props.hasBadge"
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
    iconColor: {
      type: String,
      default: "",
    },
    iconSize: {
      type: String,
      default: "",
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
