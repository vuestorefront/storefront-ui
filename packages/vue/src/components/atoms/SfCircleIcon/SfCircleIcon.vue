<template>
  <SfButton class="sf-circle-icon" :disabled="disabled" v-on="$listeners">
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
      <slot v-if="hasBadge" name="badge" v-bind="{ badgeLabel, hasBadge }">
        <div class="sf-circle-icon__badge">
          {{ badgeLabel }}
        </div>
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
    iconColor: {
      type: String,
      default: ""
    },
    /**
     */
    iconSize: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hasBadge: {
      type: Boolean,
      default: false
    },
    badgeLabel: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfCircleIcon.scss";
</style>
