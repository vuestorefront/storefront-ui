<template>
  <button
    class="sf-color"
    :class="{ 'sf-color--active': isActive }"
    :aria-label="ariaLabel"
    :aria-pressed="isActive"
    v-on="$listeners"
  >
    <!-- @slot Custom color markup -->
    <slot>
      <div v-if="color" class="sf-color__fill" :style="colorStyle" />
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
    isActive: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    colorStyle() {
      return "background-color:" + this.color;
    }
  },
  watch: {
    isActive: {
      handler(value) {
        if (value) {
          this.$el.style.setProperty("--border-color", this.color);
        }
      }
    }
  },
  mounted() {
    this.$el.style.setProperty("--border-color", this.color);
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfColor.scss";
</style>
