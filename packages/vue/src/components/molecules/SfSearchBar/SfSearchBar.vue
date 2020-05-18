<template>
  <div class="sf-search-bar">
    <!-- <input
      class="sf-search-bar__input"
      type="search"
      :value="value"
      v-bind="$attrs"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('enter', $event.target.value)"
      @keyup.esc="$emit('input', '')"
      @blur="$emit('blur')"
    /> -->
    <SfInput
      class="sf-search-bar__input"
      type="search"
      :value="value"
      v-bind="$attrs"
      :label="placeholder"
      v-on="listeners"
    >
    </SfInput>
    <!-- @slot -->
    <slot name="icon">
      <span class="sf-search-bar__icon">
        <SfIcon color="#737680" size="1.25rem" icon="search" />
      </span>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfInput from "../../atoms/SfInput/SfInput.vue";
export default {
  name: "SfSearchBar",
  components: { SfIcon, SfInput },
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
