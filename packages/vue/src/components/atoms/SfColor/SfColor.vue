<template>
  <button
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
export default {
  name: "SfColor",
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
@import "~@storefront-ui/shared/styles/components/SfColor.scss";
</style>
