<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-price']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <!--@slot Custom regular price -->
    <slot name="regular" v-bind="{ props }">
      <span v-if="!props.special" class="sf-price__regular">
        {{ props.regular }}
      </span>
    </slot>
    <!--@slot Custom old price (value from regular)-->
    <slot name="old" v-bind="{ props }">
      <del v-if="props.special" class="sf-price__old">
        {{ props.regular }}
      </del>
    </slot>
    <!--@slot Custom special price -->
    <slot name="special" v-bind="{ props }">
      <ins v-if="props.special" class="sf-price__special">
        {{ props.special }}
      </ins>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfPrice",
  props: {
    regular: {
      type: [String, Number],
      default: null,
    },
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
