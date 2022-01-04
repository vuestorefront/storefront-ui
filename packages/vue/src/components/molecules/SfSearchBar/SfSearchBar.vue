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
    <slot v-bind="$attrs" v-on="$listeners"></slot>
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
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String],
      default: null,
    },
    icon: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
        "keyup.enter": (event) => this.$emit("input", event.target.value),
        "keyup.esc": () => this.$emit("input", ""),
        blur: () => this.$emit("blur"),
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
