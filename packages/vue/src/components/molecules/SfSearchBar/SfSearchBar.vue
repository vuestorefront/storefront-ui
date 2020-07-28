<template>
  <div class="sf-search-bar">
    <input
      v-focus
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
        <SfIcon color="#43464E" size="1.25rem" icon="search" />
      </span>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import { focus } from "../../../utilities/directives";
export default {
  name: "SfSearchBar",
  directives: {
    focus,
  },
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
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
