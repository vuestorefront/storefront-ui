<template>
  <SfInput
    class="sf-search-bar"
    type="search"
    :value="value"
    v-bind="$attrs"
    :placeholder="placeholder"
    name="search"
    :icon="icon"
    :color-icon="colorIcon"
    :size-icon="sizeIcon"
    v-on="listeners"
  >
  </SfInput>
</template>
<script>
import SfInput from "../../atoms/SfInput/SfInput.vue";
export default {
  name: "SfSearchBar",
  components: { SfInput },
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
    colorIcon: {
      type: String,
      default: "--c-secondary-variant",
    },
    sizeIcon: {
      type: String,
      default: "1.25rem",
    },
    icon: {
      type: [String, Array],
      default: "search",
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (value) => this.$emit("input", value),
        keyup: (event) => {
          if (event.enter) this.$emit("enter", event.target.value);
        },
        keyup: (event) => {
          if (event.esc) this.$emit("input", "");
        },
        blur: () => this.$emit("blur"),
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
