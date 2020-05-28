<template>
  <ul class="sf-list">
    <!-- @slot -->
    <slot />
  </ul>
</template>
<script>
export default {
  name: "SfList",
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfList.scss";
</style>
