<template>
  <SfInput
    class="sf-search-bar"
    type="search"
    :value="value"
    v-bind="$attrs"
    :placeholder="placeholder"
    icon="search"
    name="search"
    v-on="$listeners"
    @keyup.enter="$emit('enter', $event.target.value)"
    @keyup.esc="$emit('input', '')"
    @blur="$emit('blur')"
  >
    <SfButton
      class="sf-search-bar__button sf-button--pure"
      @click="$emit('click', value)"
    >
      <span v-if="icon" class="sf-search-bar__icon">
        <SfIcon :color="icon.color" :size="icon.size" :icon="icon.icon" />
      </span>
    </SfButton>
  </SfInput>
</template>
<script>
import SfInput from "../../atoms/SfInput/SfInput.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import { focus } from "../../../utilities/directives";

export default {
  name: "SfSearchBar",
  components: { SfInput, SfIcon, SfButton },
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
      default: () => {},
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
