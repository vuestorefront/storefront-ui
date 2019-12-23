<template>
  <button class="sf-button" v-bind="$attrs" v-on="$listeners">
    <!--@slot Use this slot to place content inside the button.-->
    <slot />
  </button>
</template>
<script>
export default {
  name: "SfButton"
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfButton.scss";
</style>
