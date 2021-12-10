<template>
  <div class="sf-top-bar">
    <div class="sf-top-bar__container">
      <div class="sf-top-bar__left">
        <slot name="left" />
      </div>
      <div class="sf-top-bar__center">
        <slot name="center" />
      </div>
      <div class="sf-top-bar__right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SFTopBar",
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfTopBar.scss";
</style>
