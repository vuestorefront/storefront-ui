<template>
  <div class="sf-chevron">
    <!-- @slot Custom chevron markup -->
    <slot>
      <span class="sf-chevron__bar sf-chevron__bar--left"></span>
      <span class="sf-chevron__bar sf-chevron__bar--right"></span>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfChevron",
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfChevron.scss";
</style>
