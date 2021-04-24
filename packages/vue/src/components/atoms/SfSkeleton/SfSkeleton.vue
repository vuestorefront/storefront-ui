<template>
  <div class="sf-skeleton" :class="`sf-skeleton--${type}`">
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfSkeleton",
  props: {
    /**
     * Defines shape for SfSkeleton.
     * Available values: "paragraph", "image", "button", "input", "avatar"
     */
    type: {
      type: String,
      default: "paragraph",
      validator: (value) => ["paragraph", "image", "button", "input", "avatar"],
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfSkeleton.scss";
</style>
