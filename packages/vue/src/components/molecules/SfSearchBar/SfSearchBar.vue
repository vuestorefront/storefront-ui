<template>
  <SfInput
    class="sf-search-bar"
    type="search"
    name="search"
    :value="value"
    :placeholder="placeholder"
    :icon="icon.icon"
    :icon-color="icon.color"
    :icon-size="icon.size"
    @keyup.enter="$emit('enter', $event.target.value)"
    @keyup.esc="$emit('input', '')"
    @blur="$emit('blur')"
  >
    <slot v-bind="$attrs" v-on="$listeners"> </slot>
  </SfInput>
</template>
<script>
import SfInput from "../../atoms/SfInput/SfInput.vue";
import { focus } from "../../../utilities/directives";

export default {
  name: "SfSearchBar",
  components: { SfInput },
  directives: {
    focus,
  },
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
     * Object to define icon look. Should have values for color and size
     */
    icon: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
