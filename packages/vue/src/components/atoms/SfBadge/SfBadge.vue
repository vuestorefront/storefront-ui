<template functional>
  <span
    :class="[data.class, data.staticClass, 'sf-badge']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <!--@slot Use this slot to place content inside the badge-->
    <slot />
  </span>
</template>
<script>
export default {
  name: "SfBadge",
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfBadge.scss";
</style>
