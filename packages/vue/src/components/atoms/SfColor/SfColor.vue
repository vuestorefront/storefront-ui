<template>
  <button
    v-focus
    class="sf-color"
    :class="{ 'sf-color--active': selected }"
    :style="style"
    :aria-pressed="selected.toString()"
    v-on="$listeners"
  >
    <transition name="sf-color__badge">
      <!-- @slot Use it to replace badge to custom element -->
      <slot name="badge" v-bind="{ selected, hasBadge }">
        <SfBadge
          v-if="selected && hasBadge"
          class="sf-color__badge mobile-only"
        >
          <SfIcon icon="check" size="7px" color="white" />
        </SfBadge>
      </slot>
    </transition>
  </button>
</template>
<script>
import { focus } from "../../../utilities/directives/focus-directive.js";
import SfBadge from "../../atoms/SfBadge/SfBadge.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfColor",
  components: {
    SfBadge,
    SfIcon,
  },
  directives: {
    focus: focus,
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
