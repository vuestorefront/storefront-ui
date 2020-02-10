<template>
  <button
    v-focus
    class="sf-color"
    :class="{ 'sf-color--active': selected }"
    :style="style"
    :aria-pressed="selected.toString()"
    v-on="$listeners"
  >
    <!-- @slot Custom color markup -->
    <slot>
      <div v-if="color" class="sf-color__fill" />
    </slot>
  </button>
</template>
<script>
import { focus } from "../../../utilities/directives/directives.js";
export default {
  name: "SfColor",
  directives: {
    focus: focus
  },
  props: {
    color: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return { "--color": this.color };
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfColor.scss";
</style>
