<template>
  <div class="sf-price">
    <!-- @slot Custom special price -->
    <slot name="special" v-bind="{ special }">
      <ins v-if="special" class="sf-price__value sf-price__value--special">{{
        special
      }}</ins>
    </slot>
    <!--@slot Custom old price (value from regular)-->
    <slot name="old" v-bind="{ regular, special }">
      <del v-if="special" class="sf-price__value sf-price__value--old">{{
        regular
      }}</del>
    </slot>
    <!--@slot Custom regular price -->
    <slot name="regular" v-bind="{ regular, special }">
      <span v-if="!special" class="sf-price__value">{{ regular }}</span>
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
      default: null
    },
    /**
     * Special price value
     */
    special: {
      type: [String, Number],
      default: null
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfPrice.scss";
</style>
