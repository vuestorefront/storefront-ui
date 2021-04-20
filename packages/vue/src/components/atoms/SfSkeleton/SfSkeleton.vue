<template functional>
  <div
    :class="[
      data.class,
      data.staticClass,
      'sf-skeleton',
      `sf-skeleton--${props.type}`,
    ]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
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
