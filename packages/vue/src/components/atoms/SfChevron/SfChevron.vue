<template>
  <div class="sf-chevron">
    <!-- @slot Custom chevron markup -->
    <slot>
      <span class="sf-chevron__left-bar"></span>
      <span class="sf-chevron__right-bar"></span>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfChevron"
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfChevron.scss";
</style>
