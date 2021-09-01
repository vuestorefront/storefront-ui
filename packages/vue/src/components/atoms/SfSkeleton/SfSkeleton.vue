<template>
  <div class="sf-skeleton" :class="classFromProps">
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
  computed: {
    classFromProps() {
      console.log(this.type);
      switch (this.type) {
        case "paragraph":
          return "sf-skeleton--paragraph";
        case "image":
          return "sf-skeleton--image";
        case "button":
          return "sf-skeleton--button";
        case "input":
          return "sf-skeleton--input";
        case "avatar":
          return "sf-skeleton--avatar";
        default:
          return "sf-skeleton--paragraph";
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfSkeleton.scss";
</style>
