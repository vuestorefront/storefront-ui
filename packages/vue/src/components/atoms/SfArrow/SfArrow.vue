<template>
  <SfButton
    class="sf-arrow"
    type="button"
    :disabled="button.disabled"
    :link="button.link"
    v-on="$listeners"
  >
    <!--@slot Use this slot to replace arrow icon-->
    <slot>
      <SfIcon
        :icon="icon.icon"
        :size="icon.size"
        :color="icon.color"
        :view-box="icon.viewBox"
        :has-badge="icon.hasBadge"
        :badge-label="icon.badgeLabel"
        :coverage="icon.coverage"
        aria-hidden="true"
        class="sf-arrow__icon"
      />
    </slot>
  </SfButton>
</template>
<script>
import SfButton from "../SfButton/SfButton";
import SfIcon from "../SfIcon/SfIcon";
export default {
  name: "SfArrow",
  components: { SfButton, SfIcon },
  props: {
    /**
     * Object to pass icon props (icon, size, color, viewBox, hasBadge, badgeLabel, coverage).
     */
    icon: {
      type: Object,
      default: () => {
        return {
          icon: "arrow_left",
          size: "1.5rem",
        };
      },
    },
    /**
     * Object to pass button props (disabled, link).
     */
    button: {
      type: Object,
      default: () => {
        return {
          disabled: false,
        };
      },
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfArrow.scss";
</style>
