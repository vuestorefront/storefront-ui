<template>
  <div class="sf-search-bar">
    <input
      class="sf-search-bar__input"
      type="search"
      :value="value"
      v-bind="$attrs"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('enter', $event.target.value)"
      @keyup.esc="$emit('input', '')"
      @blur="$emit('blur')"
    />
    <!-- @slot -->
    <slot name="icon">
      <span class="sf-search-bar__icon">
        <SfIcon :color="iconColor" :size="iconSize" icon="search" />
      </span>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfSearchBar",
  components: { SfIcon },
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String],
      default: null,
    },
    iconSize: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
