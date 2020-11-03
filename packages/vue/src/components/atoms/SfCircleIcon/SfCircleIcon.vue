<template>
  <SfButton class="sf-circle-icon" :disabled="disabled" v-on="$listeners">
    <!--@slot Custom content that will replace default icon. can be used for inlined SVG's-->
    <slot>
      <SfIcon
        aria-hidden="true"
        class="sf-circle-icon__icon"
        :icon="icon"
        :color="iconColor"
        :size="iconSize"
        :badge="badge"
      />
    </slot>
  </SfButton>
</template>
<script>
import SfButton from "../SfButton/SfButton.vue";
import SfIcon from "../SfIcon/SfIcon.vue";
export default {
  name: "SfCircleIcon",
  components: {
    SfButton,
    SfIcon,
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
    badge: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfCircleIcon.scss";
</style>
