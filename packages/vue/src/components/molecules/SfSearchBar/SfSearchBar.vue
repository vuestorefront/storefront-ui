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
      <span v-if="iconObject" class="sf-search-bar__icon">
        <SfIcon :icon-object="iconObject" />
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
    /**
     * Text for placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Value that will be displayed in search bar
     */
    value: {
      type: [Number, String],
      default: null,
    },
    /**
     * Object to define icon look.
     */
    iconObject: {
      type: Object,
      default: () => {
        return {
          icon: "search",
        };
      },
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
