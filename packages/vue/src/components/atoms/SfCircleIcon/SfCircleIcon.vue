<template>
  <SfButton class="sf-circle-icon" :disabled="disabled" v-on="$listeners">
    <!--@slot Custom content that will replace default icon. can be used for inlined SVG's-->
    <slot>
      <SfIcon
        aria-hidden="true"
        class="sf-circle-icon__icon"
        :icon="icon.icon"
        :size="icon.size"
        :color="icon.color"
        :view-box="icon.viewBox"
        :has-badge="icon.hasBadge"
        :badge-label="icon.badgeLabel"
        :coverage="icon.coverage"
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
