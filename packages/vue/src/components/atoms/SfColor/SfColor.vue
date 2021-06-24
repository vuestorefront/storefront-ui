<template>
  <SfButton
    class="sf-button--pure sf-color"
    :class="{ 'is-active': selected }"
    :style="style"
    :aria-pressed="selected.toString()"
    :data-testid="color"
    v-on="$listeners"
  >
    <transition name="sf-bounce">
      <!-- @slot Use it to replace badge to custom element -->
      <slot name="badge" v-bind="{ selected, hasBadge }">
        <SfBadge
          v-if="selected && hasBadge"
          class="sf-color__badge smartphone-only"
        >
          <SfIcon aria-hidden="true" icon="check" size="16px" color="white" />
        </SfBadge>
      </slot>
    </transition>
  </SfButton>
</template>
<script>
import SfBadge from "../../atoms/SfBadge/SfBadge.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../SfButton/SfButton.vue";
export default {
  name: "SfColor",
  components: {
    SfBadge,
    SfIcon,
    SfButton,
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
  computed: {
    style() {
      return { "--color-background": this.color };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfColor.scss";
</style>
