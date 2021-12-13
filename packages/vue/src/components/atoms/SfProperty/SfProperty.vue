<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-property']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot name="name" v-bind="{ props }">
      <span class="sf-property__name">
        {{ props.name }}
      </span>
    </slot>
    <slot name="value" v-bind="{ props }">
      <span class="sf-property__value">
        {{ props.value }}
      </span>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfProperty",
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfProperty.scss";
</style>
