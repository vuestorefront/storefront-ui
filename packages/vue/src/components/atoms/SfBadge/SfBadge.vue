<template>
  <div class="sf-badge">
    <!--@slot Use this slot to place content inside the badge-->
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfBadge"
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBadge.scss";
</style>
