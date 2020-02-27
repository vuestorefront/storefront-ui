<template>
  <div :style="maxWidth" class="sf-header-navigation-item" v-on="$listeners">
    <!-- @slot Slot for custom navigation -->
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfHeaderNavigationItem",
  data() {
    return {
      maxWidth: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.maxWidth = {
        "--max-width": `${this.$el.offsetWidth}px`
      };
    });
  }
};
</script>
