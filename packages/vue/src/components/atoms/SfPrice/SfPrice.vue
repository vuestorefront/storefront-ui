<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-price']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot name="regular" v-bind="{ props }">
      <span
        :class="{ 'display-none': !props.regular || props.special }"
        class="sf-price__regular"
      >
        {{ props.regular }}
      </span>
    </slot>
    <slot name="old" v-bind="{ props }">
      <del :class="{ 'display-none': !props.special }" class="sf-price__old">
        {{ props.regular }}
      </del>
    </slot>
    <slot name="special" v-bind="{ props }">
      <ins
        :class="{ 'display-none': !props.special }"
        class="sf-price__special"
      >
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
<style lang="scss" src="./SfPrice.scss"></style>
