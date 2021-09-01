<template>
  <div class="sf-badge" v-bind="$attrs">
    <!--@slot Use this slot to place content inside the badge-->
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfBadge",
  compatConfig: {
    MODE: 3, //temporary and to be removed on removal of @vue/compat
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfBadge.scss";
</style>
