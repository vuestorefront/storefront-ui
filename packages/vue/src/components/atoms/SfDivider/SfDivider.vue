<template>
  <hr class="sf-divider" v-bind="$attrs" />
</template>
<script>
export default {
  name: "SfDivider",
  compatConfig: {
    MODE: 3, //temporary and to be removed on removal of @vue/compat
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfDivider.scss";
</style>
