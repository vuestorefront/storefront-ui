<template>
  <div class="sf-price" v-bind="$attrs">
    <!--@slot Custom regular price -->
    <slot name="regular">
      <span v-if="!special" class="sf-price__regular">
        {{ regular }}
      </span>
    </slot>
    <!--@slot Custom old price (value from regular)-->
    <slot name="old">
      <del v-if="special" class="sf-price__old">
        {{ regular }}
      </del>
    </slot>
    <!--@slot Custom special price -->
    <slot name="special">
      <ins v-if="special" class="sf-price__special">
        {{ special }}
      </ins>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfPrice",
  compatConfig: {
    MODE: 3, //temporary and to be removed on removal of @vue/compat
  },
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
