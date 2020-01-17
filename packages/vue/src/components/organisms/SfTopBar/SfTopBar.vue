<template>
  <div class="sf-topbar">
    <div class="sf-topbar__left">
      <!--@slot Custom left content-->
      <slot name="left" />
    </div>
    <div class="sf-topbar__center">
      <!--@slot Custom center content-->
      <slot />
    </div>
    <div class="sf-topbar__right">
      <!--@slot Custom right content-->
      <slot name="right" />
    </div>
  </div>
</template>
<script>
export default {
  name: "SFTopBar"
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfTopBar.scss";
</style>
