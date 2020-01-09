<template>
  <SfButton class="sf-circle-icon" :aria-label="ariaLabel" v-on="$listeners">
    <!--@slot Custom content that will replace default icon. can be used for inlined SVG's-->
    <slot>
      <SfIcon
        aria-hidden="true"
        tabindex="-1"
        class="sf-circle-icon__icon"
        :icon="icon"
        :color="iconColor"
        :size="iconSize"
      />
    </slot>
    <transition name="sf-circle-icon__badge">
      <slot v-if="hasBadge" name="badge">
        <div class="sf-circle-icon__badge"></div>
      </slot>
    </transition>
  </SfButton>
</template>
<script>
import SfButton from "../SfButton/SfButton.vue";
import SfIcon from "../SfIcon/SfIcon.vue";
export default {
  name: "SfCircleIcon",
  components: {
    SfButton,
    SfIcon
  },
  props: {
    /**
     */
    icon: {
      type: [String, Array],
      default: "home"
    },
    /**
     */
    iconColor: {
      type: String,
      default: "white"
    },
    /**
     */
    iconSize: {
      type: String,
      default: "100%"
    },
    /**
     * Sets aria-label for button icon
     */
    ariaLabel: {
      type: String,
      default: ""
    },
    hasBadge: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCircleIcon.scss";
</style>
