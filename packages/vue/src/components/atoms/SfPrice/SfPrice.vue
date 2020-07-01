<template>
  <div class="sf-price">
    <!--@slot Custom regular price -->
    <slot name="regular" v-bind="{ regular, special }">
      <span v-if="!special" class="sf-price__regular">{{ regular }}</span>
    </slot>
    <!--@slot Custom old price text -->
    <slot name="old-text" />
    <!--@slot Custom old price (value from regular)-->
    <slot name="old" v-bind="{ regular, special }">
      <del v-if="special" class="sf-price__old">{{ regular }}</del>
    </slot>
    <!--@slot Custom special price text -->
    <slot name="special-text" />
    <!--@slot Custom special price -->
    <slot name="special" v-bind="{ special }">
      <ins v-if="special" class="sf-price__special">{{ special }}</ins>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfPrice",
  props: {
    /**
     * Regular/old price value. Crossed out if `special` is provided
     */
    regular: {
      type: [String, Number],
      default: null,
    },
    /**
     * Special price value
     */
    special: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfPrice.scss";
</style>
