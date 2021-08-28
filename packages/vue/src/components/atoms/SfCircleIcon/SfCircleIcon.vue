<template>
  <component
    :is="components.SfButton"
    class="sf-circle-icon"
    v-bind="$attrs"
    :disabled="disabled"
  >
    <!--@slot Custom content that will replace default icon. can be used for inlined SVG's-->
    <slot>
      <component
        :is="components.SfIcon"
        aria-hidden="true"
        class="sf-circle-icon__icon"
        :icon="icon"
        :color="iconColor"
        :size="iconSize"
        :badge-label="badgeLabel"
        :has-badge="hasBadge"
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
