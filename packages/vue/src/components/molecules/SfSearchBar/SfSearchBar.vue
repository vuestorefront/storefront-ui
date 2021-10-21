<template>
  <div class="sf-search-bar">
    <input
      v-focus
      class="sf-search-bar__input"
      type="search"
      :value="value"
      v-bind="$attrs"
      :placeholder="placeholder"
      v-on="listeners"
    />
    <!-- @slot -->
    <slot name="icon">
      <SfButton
        class="sf-search-bar__button sf-button--pure"
        aria-label="Search"
        @click="$emit('click', value)"
      >
        <span v-if="icon" class="sf-search-bar__icon">
          <SfIcon :color="icon.color" :size="icon.size" icon="search" />
        </span>
      </SfButton>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import { focus } from "../../../utilities/directives";
export default {
  name: "SfSearchBar",
  directives: {
    focus,
  },
  components: { SfIcon, SfButton },
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
