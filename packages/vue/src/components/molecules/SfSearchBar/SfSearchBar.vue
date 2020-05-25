<template>
  <div class="sf-search-bar">
    <SfInput
      class="sf-search-bar__input"
      type="search"
      :value="value"
      v-bind="$attrs"
      :label="placeholder"
      name="search"
      icon="search"
      color-icon="--c-secondary-variant"
      size-icon="1.25rem"
      v-on="listeners"
    >
    </SfInput>
  </div>
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
